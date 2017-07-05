# modern-js-bootstrap

Build maintainable future-proof JS code now!

## Rationale

 - We want to build maintainable code with static typing and use modern JavaScript code that will work on any browser.
 - We want to have a small JavaScript code footprint so users won't have to download large JS file on each request. 

 This bootstrap will help you code your next feature for a new or existing web app you are working with minimal effort using the latest ES6 features with static typing.

 ### What's in it?

  - [TypeScript](https://www.typescriptlang.org/) - enable static typing and modern JavaScript features.
  - [Rollup](https://rollupjs.org/) - makes sure we are only bundling code that are being used.
  - [Yarn](https://yarnpkg.com/en/) - for faster dependency resolution and locking.  

## Requirements and Installation

 - [NodeJS](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com/en/)
 - `git clone git@github.com:sandaemc/modern-js-bootsrap.git`
 - `cd modern-js-bootstrap && yarn install`

## Developing and Compiling

 - Modify src/app.ts and add your awesome code.
 - `yarn run build`
 - View bundle.js - this is the bundle file that can be copied into any existing codebase.
 - **Note**: You can edit the `rollup.config.js` so that it will generate the bundle to your existing codebase.
