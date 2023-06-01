import React, { Component } from "react"
import "./paymentForm.css"

let appId
let locationId
let lambdaUrl

if (process.env.NODE_ENV === 'development') {
    appId = 'sandbox-sq0idb-S1xs9NDkn4cJR2JcDOupiA'
    // this is the dev NWIF main location
    // there is a separate location for (At Event)
    locationId = 'LWGKEFPEN4J9S'
    lambdaUrl = 'https://9lr67gx861.execute-api.us-east-1.amazonaws.com/reg2'
} else {
    appId = 'sq0idp-OyXssltwNQblNk9NOxKJ4w'
    locationId = 'L4RPAVMCK1MD7'
    lambdaUrl = 'https://9lr67gx861.execute-api.us-east-1.amazonaws.com/reg2-prod'
}

export const loadSquareSdk = () => {
    return new Promise((resolve, reject) => {
        const sqPaymentScript = document.createElement("script")
        if (process.env.NODE_ENV === 'development') {
            sqPaymentScript.src = "https://sandbox.web.squarecdn.com/v1/square.js"
        } else {
            sqPaymentScript.src = "https://web.squarecdn.com/v1/square.js"
        }
        sqPaymentScript.crossorigin = "anonymous"
        sqPaymentScript.onload = () => {
            resolve()
        }
        sqPaymentScript.onerror = () => {
            reject(`Failed to load ${sqPaymentScript.src}`)
        }
        document.getElementsByTagName("head")[0].appendChild(sqPaymentScript)
    })
}

async function initializeCard(payments) {
    const card = await payments.card();
    await card.attach('#card-container');

    return card;
}

function buildPaymentRequest(payments, amount) {
    return payments.paymentRequest({
        countryCode: 'US',
        currencyCode: 'USD',
        total: {
            amount: (amount / 100).toString(),
            label: 'Total',
        },
    });
}

async function initializeGooglePay(payments, amount) {
    const paymentRequest = buildPaymentRequest(payments, amount);
    const googlePay = await payments.googlePay(paymentRequest);
    await googlePay.attach('#google-pay-button');

    return googlePay;
}

async function createPayment(token, guid, amount) {
    const body = JSON.stringify({
        locationId,
        sourceId: token,
        guid,
        amount
    });

    const paymentResponse = await fetch(lambdaUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });

    if (paymentResponse.ok) {
        return paymentResponse.json();
    }

    const errorBody = await paymentResponse.text();
    throw new Error(errorBody);
}

async function tokenize(paymentMethod) {
    const tokenResult = await paymentMethod.tokenize();
    if (tokenResult.status === 'OK') {
        return tokenResult.token;
    } else {
        let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
        if (tokenResult.errors) {
            errorMessage += ` and errors: ${JSON.stringify(
                tokenResult.errors
            )}`;
        }

        throw new Error(errorMessage);
    }
}

// status is either SUCCESS or FAILURE;
function displayPaymentResults(status, paymentResults) {
    const statusContainer = document.getElementById(
        'payment-status-container'
    );
    const receiptContainer = document.getElementById(
        'receipt-container'
    );
    if (status === 'SUCCESS') {
        statusContainer.classList.remove('is-failure');
        statusContainer.classList.add('is-success');
        receiptContainer.style.visibility = 'visible';
        receiptContainer.style.visibility = 'visible';
        receiptContainer.innerHTML = `Thank you for purchasing a NWIF badge! Please save <a href=${paymentResults.payment.receiptUrl} target="_blank">your receipt</a> before closing this page.<br /><br /><a href="https://discord.gg/h5yJbXgTgE" target="_blank">Join our Discord</a> and claim your role now!<br /><br />`;
        if (typeof window !== "undefined" && typeof window.gtag !== "undefined") { 
            const params = new URLSearchParams(document.location.search);
            window.gtag("event", "badge-purchase", {badgeType: params.get("badge_type") ?? "Unknown"})
        }
    } else {
        statusContainer.classList.remove('is-success');
        statusContainer.classList.add('is-failure');
    }

    statusContainer.style.visibility = 'visible';
}

function resetSource(allIframes) {
    for (let i = 0; i < allIframes.length; i++) {
        allIframes[i].src = ""
    }
}

export default class PaymentForm extends Component {
    async componentDidMount() {
        if (!window.Square) {
            throw new Error('Square.js failed to load properly');
        }

        let guid = this.props.guid
        let amount = this.props.amount

        let payments;
        try {
            payments = window.Square.payments(appId, locationId)
        } catch {
            const statusContainer = document.getElementById(
                'payment-status-container'
            );
            statusContainer.className = 'missing-credentials';
            statusContainer.style.visibility = 'visible';
            return;
        }

        let card;
        try {
            card = await initializeCard(payments);
        } catch (e) {
            console.error('Initializing Card failed', e);
            return;
        }

        let googlePay;
        try {
            googlePay = await initializeGooglePay(payments, amount);
        } catch (e) {
            console.error('Initializing Google Pay failed', e);
            // There are a number of reason why Google Pay may not be supported
            // (e.g. Browser Support, Device Support, Account). Therefore you should handle
            // initialization failures, while still loading other applicable payment methods.
        }

        async function handlePaymentMethodSubmission(event, paymentMethod) {
            event.preventDefault();

            try {
                // disable the submit button as we await tokenization and make a payment request.
                cardButton.disabled = true;
                const token = await tokenize(paymentMethod);
                const paymentResults = await createPayment(token, guid, amount);
                displayPaymentResults('SUCCESS', paymentResults);

                console.debug('Payment Success', paymentResults);
                try {
                    resetSource(document.getElementsByTagName("iframe"))
                } finally { }
            } catch (e) {
                cardButton.disabled = false;
                displayPaymentResults('FAILURE');
                console.error(e.message);
            }
        }

        const cardButton = document.getElementById('card-button');
        cardButton.addEventListener('click', async function (event) {
            event.preventDefault()
            await handlePaymentMethodSubmission(event, card);
        });

        // Checkpoint 2.
        if (googlePay !== undefined) {
            const googlePayButton = document.getElementById('google-pay-button');
            googlePayButton.addEventListener('click', async function (event) {
                await handlePaymentMethodSubmission(event, googlePay);
            });
        }

        if (this.applePay) {
            const applePayButton = document.getElementById('apple-pay-button');
            applePayButton.addEventListener('click', async function (event) {
                await handlePaymentMethodSubmission(event, this.applePay);
            });
        }
    }

    
    render() {
        return (
            <div>
                <form id="payment-form">
                <div id="google-pay-button"></div>
                <div id="card-container"></div>
                <button id="card-button" type="button">Pay ${this.props.amount / 100}</button>
                </form>
                <div id="payment-status-container"></div>
                <div id="receipt-container"></div>
            </div>
        )
    }
} 