# Welcome to the NW IdolFest Website!

This is the repo for https://nwidolfest.com/. It runs off of Gatsby with a Material UI theme and is currently deployed on GitHub Pages.

## Set Up

1. Have a working node/npm dev environment with node <= 16.15.0 (this is due to a [bug in PostCSS](https://github.com/facebook/create-react-app/issues/11565)). We suggest using nvm and `nvm install 16.15.0`.
1. `npm install -g gatsby-cli@3.6`
1. `npm install`
1. `npm run develop`

## Site Builds

The site uses gh-pages to deploy. Assuming you have collaborator access to this repo, there are two methods of deployment:

1. Locally, run `npm run deploy`.
2. From GitHub, go to "Actions" and manually invoke Gatsby Publish.

## Running the CMS (netlify-cms) locally

If you're looking to test the CMS locally, it's not too hard. You'll need to run the site
in production mode, which will also run on a different port. You'll have to do a full 
build, which is very slow, but only needs to be done once. 

**IMPORTANT**: Running the CMS locally points you at the real github repo, so publishing 
**will deploy changes to the real site**. We don't currently have a good way to fake 
this out.

How: 
1. Run `npm run start-compiled` to start the server
2. Go to https://localhost/admin/
3. As you make changes, run `npm run build-admin` in another tab to copy admin files over
4. If you're making a bunch of changes, run `npm run watch-static-admin` - that will auto-copy things over.


## Random annoyances

#### All the images are broken!! 

Try stoppping the server, running `npx gatsy clean` and starting back up.
