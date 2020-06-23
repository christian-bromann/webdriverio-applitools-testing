const { config: common } = require('./wdio.conf')

exports.config = Object.assign(common, {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [
        [
            'applitools', {
                // My applitools key
                key: process.env.APPLITOOLS_KEY,
            }
        ],
        'sauce'
    ],

    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        browserName: 'chrome',
        platform: 'Windows 10',
        version: 'latest',
        extendedDebugging: true
    }]
})
