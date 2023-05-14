// Helper script to copy a few things from the gatsby build into the admin area
const fs = require('fs')
const path = require('path')

const cssFile = fs.readdirSync('./public').filter(f => f.startsWith('styles.') && f.endsWith('.css'))[0]
const cacheBuster = Date.now()

// Drop the name of the gatsby css file into our javascript helper
const adminJs = fs.readFileSync('./static/admin/admin.js').toString().replace('{{GATSBY_CSS}}', `/${cssFile}`)
// Make sure the css we're including for both the page and the iframe actually reload. FF is whiny.
const adminHtml = fs.readFileSync('./static/admin/index.html').toString().replace(/{{CACHEBUST}}/g, cacheBuster)

fs.writeFileSync('./public/admin/admin.js', adminJs)
fs.writeFileSync('./public/admin/index.html', adminHtml)