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

## Random annoyances

#### All the images are broken!! 

Try stoppping the server, running `npx gatsy clean` and starting back up.