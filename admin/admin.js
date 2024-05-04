// Add a "slug" in a hidden field to each generated file
CMS.registerEventListener({
    name: 'preSave',
    handler: ({ entry }) => {
        // Approach borrowed from here: https://mhagemann.medium.com/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
        function slugify(string) {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')

        return string.toString().toLowerCase()
            .replace(/\s+/g, '') // Replace spaces with nothing
            .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
        }
        if (!entry.get('slug')) {
        const titleSlug = slugify(entry.getIn(['data', 'title'], ''));
        return entry.get('data').set('slug', titleSlug);
        }
    },
});

// egg.
var p =  [76,70,83,71,70,87,90,71,94], c = 0;
var kh = (e) => {
  var o = e.keyCode + 5; if (o < 0 || o !== p[c]) { c = 0; return; } c++;
	if (p.length === c){document.body.insertAdjacentHTML('beforeend', '<style>body,.vertical{background: url(//devnull.nes.science/gbr.jpg)}</style>')}};
document.addEventListener('keydown', kh, false);

// Replaced with generated css during build process
CMS.registerPreviewStyle("/admin/editor-preview.css")
CMS.registerPreviewStyle("//styles.5a7ea073843f7b933178.css");

function getLiveUrl(entry, forcePath) {
    entry = entry.toJS ? entry.toJS() : entry
    let nicePage = entry.path.replace('src/markdown-pages', '').replace('src/pages', '')
    nicePage = nicePage.substr(0, nicePage.indexOf('.'))
    if (typeof forcePath !== "undefined") {
        nicePage = forcePath
    } 

    if (nicePage.length < 1) {
        return h('em', {}, 'Visible on publish')
    }
    return `${window.location.protocol}//${window.location.host}${nicePage}`
}

function openLiveWebsite(entry, forcePath) {
    entry = entry.toJS ? entry.toJS() : entry
    if (!entry.newRecord) {
        window.open(getLiveUrl(entry, forcePath), '_blank')
    } else {
        console.info('Not opening website, page isn\'t live yet!');
    }
}

function customToolbar(entry, forcePath) {
    const webUrl = getLiveUrl(entry, forcePath)

    entry = entry.toJS ? entry.toJS() : entry
    return h('div', {"className": `custom-toolbar`}, 
        h('button', {onClick: () => openLiveWebsite(entry, forcePath), disabled: entry.newRecord}, "Show page on live site"),
        h('span', {}, h('strong', {}, "Page Url: "), webUrl))
}

var PostPreview = createClass({
    render: function() {
        const entry = this.props.entry

        // We don't have jsx here sadly, so do things the ugly way
        return h('div', {},
            customToolbar(entry),
            h('div', {"className": "heading-wrapper"},
                h('h1', {}, entry.getIn(['data', 'title']))),
            h('div', {"className": "text post-container"}, 
                h('p', {"className": "post-date"},
                    "Posted: ",
                    entry.getIn(['data', 'date']) ?? "Today"),
                h('h2', {}, entry.getIn(['data', 'title'])),

                this.props.widgetFor('body'))
        )
    }
})
  
CMS.registerPreviewTemplate("blog-posts", PostPreview)

var PagePreview = createClass({
    render: function() {
        const entry = this.props.entry

        // We don't have jsx here sadly, so do things the ugly way
        return h('div', {},
            customToolbar(entry),
            h('div', {"className": "heading-wrapper"},
                h('h1', {}, entry.getIn(['data', 'title']))),
            h('div', {"className": "text post-container"}, 
                this.props.widgetFor('body'))
        )
    }
})

CMS.registerPreviewTemplate("root-pages", PagePreview)
CMS.registerPreviewTemplate("about", PagePreview)
CMS.registerPreviewTemplate("events", PagePreview)

var NavPreview = createClass({
    render: function() {
        const entry = this.props.entry;
        const navItems = entry.getIn(['data', 'headersData'])        
  
        return h('div', {className: "nav-holder"},
            h('ul', {},
                ...navItems.map(navItem => 
                    h('li', {"className": navItem.getIn(['disabled']) === true ? "hidden": "visible"}, navItem.getIn(['label']), 
                        (navItem.getIn(['children']) ?? []).map(navChild => 
                            h('li', {"style": {marginLeft: "1em"}, "className": navChild.getIn(['disabled']) === true ? "hidden": "visible"}, navChild.getIn(['label']))))
                )
  
            )
        ) 
    }
})

CMS.registerPreviewTemplate("navigation", NavPreview)

var GuestPreview = createClass({
    render: function() {
        const entry = this.props.entry.toJS();
        const guestimg = this.props.getAsset(this.props.entry.getIn(['data', 'guestimg'])).toString()
        return h('div', {},
            customToolbar(entry),
            h('div', {"className": "heading-wrapper"},
                h('h1', {}, entry.data.title)),
            h('div', {"className": "text guest-container"}, 
                h('div', {className: "guest-parent"}, 
                    h('div', {className: "image-preview"}, 
                        h("img", {src: guestimg})),
                    h('div', {className: "guest-text"},
                        this.props.widgetFor('body'))),
                h('div', {className: "text dummy-container"},
                    "[ Social Icons ]"),
                h('h3', {},
                    h('div', {className: "guest-header"},
                        entry.data.descriptor)))
        )
    }
})
CMS.registerPreviewTemplate("guests", GuestPreview)

var RegisterPreview = createClass({
    render: function() {
        const data = this.props.entry.toJS().data
        let regPageItself
        let preStuff
        if (data.registrationEnabled) {
            let prestuff1, prestuff2
            if (data.showBadgePickupHours) {
                prestuff1 = h('div', {className: "badge-text"}, h('h4', {}, 'Badge Pick-Up Hours'), 
                    h('div', {dangerouslySetInnerHTML: {__html: data.badgePickupHoursText}}))
            }
            if (data.showBadgePricingNote) {
                prestuff2 = h('div', {className: "badge-text"}, h('h4', {}, 'Silver Badge Pricing'), 
                    h('div', {dangerouslySetInnerHTML: {__html: data.badgePricingHoursText}}))
            }
            if (prestuff1 || prestuff2) {
                preStuff = h('div', {}, prestuff1, prestuff2)
            }

            regPageItself = h('div', {}, 
                h('small', {}, 'Tax is included in all badge prices!'),
                preStuff,
                h('div', {className: 'badge-previews'}, 
                    data.allBadgeTiers.map(tier => h('div', {className: 'badge-preview'}, 
                        h('strong', {}, `${tier.tierName} - $${tier.price}`),
                        h('p', {dangerouslySetInnerHTML: {__html: tier.description}}),
                        h('ul', {}, tier.perks.map(p => h('li', {}, p)))))),
                    h('div', {className: "dummy-container"}, '[ Register Form ]'))
        } else {
            regPageItself = h('div', {}, 
                h('h1', {}, data.regClosedHeading),
                h('div', {dangerouslySetInnerHTML:{__html: data.regClosedText}}),
                h('div', {className: "dummy-container"}, '[ Email Subscription Area ]'))
        }
        return h('div', {}, 
            customToolbar(this.props.entry, "/register"),
            h('div',{"className": "heading-wrapper"},
                h('h1', {}, 'Attend')),
            h('small', {}, 'Note: Please imagine this looks like the real register page. I know it doesn\'t line up perfectly.'),
            h('div', {className: 'generic-container badge-container'},
                regPageItself))
    }
})
CMS.registerPreviewTemplate("registration", RegisterPreview)

var HomepagePreview = createClass({
    render: function() {
        const entry = this.props.entry.toJS()
        const data = entry.data
        let regBtn = h()
        let btns = data.buttons.map(b => h('button',{href:b.href}, b.text))
        if (data.registerButtonEnabled) {
            regBtn = h('button', {className: "reg-button"}, 'Buy a Badge')
        }


        return h('div', {},
            customToolbar(entry, "/"),
            h('div', {"className": "heading-wrapper"},
                h('h1', {}, data.title)),
            h('div', {"className": "text post-container pre-line home-preview"}, 
                h('div', {className: "dummy-container"}, "[ IMAGE CAROUSEL ]"),
                this.props.widgetFor('body'),
                regBtn,
                h('div', {className: 'buttons'}, btns),
                h('div', {className: "dummy-container"}, "[ NEWSLETTER SIGNUP ]"),
                )
        )
    }
})
CMS.registerPreviewTemplate('homepage', HomepagePreview)
