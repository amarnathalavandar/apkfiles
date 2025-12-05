/**
 * Weather Page Object
 * Contains selectors and methods for interacting with the Weather app
 */

class WeatherPage {
    
    /**
     * Define selectors for the weather app elements
     * Note: You may need to adjust these selectors based on your actual app's UI elements
     * Use Appium Inspector to find the correct accessibility IDs, text, or resource IDs
     */
    
    get showTemperatureButton() {
        // Using accessibility ID (key) for the Show Temperature button
        return $('~temperature_button');
    }
    
    get temperatureText() {
        // Selector for the temperature display element
        // Adjust based on your app's actual implementation
        return $('android=new UiSelector().textContains("°")');
    }
    
    get appTitle() {
        // Selector for app title or header
        return $('android=new UiSelector().text("Weather App")');
    }
    
    /**
     * Methods for interacting with the weather page
     */
    
    async tapShowTemperature() {
        await this.showTemperatureButton.waitForDisplayed({ timeout: 10000 });
        await this.showTemperatureButton.click();
    }
    
    async getTemperature() {
        await this.temperatureText.waitForDisplayed({ timeout: 10000 });
        return await this.temperatureText.getText();
    }
    
    async isShowTemperatureButtonDisplayed() {
        try {
            await this.showTemperatureButton.waitForDisplayed({ timeout: 5000 });
            return await this.showTemperatureButton.isDisplayed();
        } catch (error) {
            return false;
        }
    }
    
    async waitForAppToLoad() {
        await browser.pause(2000);
    }
    
}

module.exports = new WeatherPage();
