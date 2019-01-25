describe('My Google Search', () => {
    it('should open the page', () => {
        browser.url('https://google.com')
        browser.takeSnapshot('main page')
    })

    it('should search for something', () => {
        $('input[name="q"]').addValue('WebdriverIO ❤️  Applitools')
        browser.keys('Enter')
        browser.takeSnapshot('search')
    })
})
