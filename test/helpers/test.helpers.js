/**
 * Common helper utilities for test automation
 */

class TestHelpers {
    
    /**
     * Wait for element and perform action with retry
     * @param {Function} action - The action to perform
     * @param {number} maxRetries - Maximum number of retries
     * @param {number} delay - Delay between retries in ms
     */
    async retryAction(action, maxRetries = 3, delay = 1000) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                await action();
                return true;
            } catch (error) {
                if (i === maxRetries - 1) {
                    throw error;
                }
                await browser.pause(delay);
            }
        }
        return false;
    }
    
    /**
     * Take screenshot with timestamp
     * @param {string} name - Screenshot name
     */
    async takeScreenshot(name) {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        const filename = `${name}_${timestamp}.png`;
        await browser.saveScreenshot(`./test/screenshots/${filename}`);
        return filename;
    }
    
    /**
     * Scroll to element by text
     * @param {string} text - Text to scroll to
     */
    async scrollToElementByText(text) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`);
    }
    
    /**
     * Wait for element to be visible
     * @param {WebdriverIO.Element} element - Element to wait for
     * @param {number} timeout - Timeout in ms
     */
    async waitForElement(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    }
    
    /**
     * Get element by multiple selector strategies
     * @param {Object} selectors - Object with different selector strategies
     */
    async findElementBySelectorStrategies(selectors) {
        for (const [strategy, selector] of Object.entries(selectors)) {
            try {
                const element = await $(selector);
                if (await element.isDisplayed()) {
                    return element;
                }
            } catch (error) {
                continue;
            }
        }
        throw new Error('Element not found with any of the provided selectors');
    }
    
    /**
     * Log test step
     * @param {string} message - Message to log
     */
    logStep(message) {
        console.log(`[TEST STEP] ${message}`);
    }
    
}

module.exports = new TestHelpers();
