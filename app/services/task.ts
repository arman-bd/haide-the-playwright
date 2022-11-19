import playwright from 'playwright-core';

export default class TaskService {
    public async screenshot(url: string, wait_second: number = 5) {
        // Launch Puppeteer
        const browser = await playwright.chromium.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto(url);
        
        // Wait for wait_second seconds
        await this.sleep(wait_second);

        // Take Screenshot
        const screenshot = await page.screenshot({ fullPage: true });

        // Close Browser
        await browser.close();

        // Return Screenshot
        return screenshot;
    }

    public async sleep(second: number) {
        return new Promise(resolve => setTimeout(resolve, second * 1000));
    }
}