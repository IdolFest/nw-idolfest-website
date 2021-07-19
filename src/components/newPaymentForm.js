import React, { Component } from "react"
import "./paymentForm.css"

const appId = 'sandbox-sq0idb-S1xs9NDkn4cJR2JcDOupiA';
const locationId = 'LKWP27DQ486HS';

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

function buildPaymentRequest(payments) {
    return payments.paymentRequest({
        countryCode: 'US',
        currencyCode: 'USD',
        total: {
            amount: '1.00',
            label: 'Total',
        },
    });
}

async function initializeGooglePay(payments) {
    const paymentRequest = buildPaymentRequest(payments);
    const googlePay = await payments.googlePay(paymentRequest);
    await googlePay.attach('#google-pay-button');

    return googlePay;
}

async function createPayment(token) {
    const body = JSON.stringify({
        locationId,
        sourceId: token,
    });

    const paymentResponse = await fetch('/payment', {
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
function displayPaymentResults(status) {
    const statusContainer = document.getElementById(
        'payment-status-container'
    );
    if (status === 'SUCCESS') {
        statusContainer.classList.remove('is-failure');
        statusContainer.classList.add('is-success');
    } else {
        statusContainer.classList.remove('is-success');
        statusContainer.classList.add('is-failure');
    }

    statusContainer.style.visibility = 'visible';
}

export default class PaymentForm extends Component {
    async componentDidMount() {
        console.log(appId, locationId)
        if (!window.Square) {
            throw new Error('Square.js failed to load properly');
        }

        let payments;
        try {
            console.log(window.Square.payments(appId, locationId))
            payments = window.Square.payments(appId, locationId);
            console.log(payments)
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
            googlePay = await initializeGooglePay(payments);
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
                const paymentResults = await createPayment(token);
                displayPaymentResults('SUCCESS');

                console.debug('Payment Success', paymentResults);
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
        if (googlePay) {
            const googlePayButton = document.getElementById('google-pay-button');
            googlePayButton.addEventListener('click', async function (event) {
                await handlePaymentMethodSubmission(event, googlePay);
            });
        }
    }

    
    render() {
        return (
            <div>
                <form id="payment-form">
                <div id="google-pay-button"></div>
                <div id="card-container"></div>
                <button id="card-button" type="button">Pay $1.00</button>
                </form>
                <div id="payment-status-container"></div>
            </div>
        )
    }
} 