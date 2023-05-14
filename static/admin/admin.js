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
            .replace(/\s+/g, '-') // Replace spaces with -
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

// Replaced with generated css during build process
CMS.registerPreviewStyle("/admin/editor-preview.css")
CMS.registerPreviewStyle("{{GATSBY_CSS}}");


var PostPreview = createClass({
    render: function() {
        const entry = this.props.entry

        // We don't have jsx here sadly, so do things the ugly way
        return h('div', {},
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
        console.info('entry', entry, this.props.fieldsMetaData.getIn(['data', 'headersData']))
        const navItems = entry.getIn(['data', 'headersData'])        
  
        return h('div', {className: "nav-holder"},
            // h('h1', {}, title),
            h('ul', {},
                ...navItems.map(navItem => 
                    h('li', {"className": navItem.getIn(['disabled'] === true ? "hidden": "visible")}, navItem.getIn(['label']), 
                        (navItem.getIn(['children']) ?? []).map(navChild => 
                            h('li', {"style": {marginLeft: "1em"}, "className": navChild.getIn(['disabled'] === true ? "hidden": "visible")}, navChild.getIn(['label']))))
                )
  
            )
        ) 
    }
})

CMS.registerPreviewTemplate("navigation", NavPreview)
