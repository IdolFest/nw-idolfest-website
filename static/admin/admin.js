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
    CMS.registerPreviewStyle("{{GATSBY_CSS}}");
    CMS.registerPreviewStyle("/admin/editor-preview.css");
