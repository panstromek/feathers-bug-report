# report

> This is a report of a possible bug in Feathers

## About

Relevant files:
`report.js` - script that connects to a server and tries to create a message
`channels.js` - throws exception in `.publish` 
`app.hooks.js` - there is a log that doesn't log anything, meaning that feathers didn't catch the error
`services/index.js` - simple dummy service, not important

## Getting Started


1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/report
    yarn
    ```

3. Start your app

    ```
    nodemon
    ```

4. Run `report.js` script in separate terminal

    It will connect to feathers and try to create a message.
     Server crashes in `.publish` method in channels
     Error that is returned is not usual feathers error and it can contain sensitive data (it contains whole context object with `params` etc.)
