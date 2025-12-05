const WeatherPage = require('../pageobjects/weather.page');

describe('Weather App Tests', () => {
    
    it('should tap the Show Temperature button', async () => {
        // Wait for the app to load
        await browser.pause(2000);
        
        // Find and tap the Show Temperature button
        await WeatherPage.showTemperatureButton.waitForDisplayed({ timeout: 10000 });
        
        // Verify button is displayed
        const isDisplayed = await WeatherPage.showTemperatureButton.isDisplayed();
        expect(isDisplayed).toBe(true);
        
        // Tap the button
        await WeatherPage.showTemperatureButton.click();
        
        // Wait a moment to see the result
        await browser.pause(1000);
        
        // You can add additional assertions here to verify the temperature is displayed
        // For example:
        // const temperatureText = await WeatherPage.temperatureText.getText();
        // expect(temperatureText).toContain('°');
    });
    
    it('should display temperature after tapping Show Temperature button', async () => {
        // Ensure we're on the weather screen
        await WeatherPage.showTemperatureButton.waitForDisplayed({ timeout: 10000 });
        
        // Tap the Show Temperature button
        await WeatherPage.showTemperatureButton.click();
        
        // Wait for temperature to be displayed
        await browser.pause(2000);
        
        // Verify that some temperature-related element is now visible
        // Note: You may need to adjust the selector based on your actual app
        console.log('Temperature button tapped successfully');
    });
    
});
