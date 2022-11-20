import playwright from 'playwright-core';
import { LaunchOptions } from 'playwright-core';
import ProxyController from '../includes/proxy_controller';

export default class TaskService {

    /**
     * Take a Screenshot of a URL
     * @param url 
     * @param wait 
     * @returns Buffer
     * @example
     * const screenshot = await new TaskService().screenshot('https://google.com', 0);
     */
    public async screenshot(url: string, wait: number = 0): Promise<string | Buffer> {

        // Set Headless Mode
        let options = {
            headless: true
        } as LaunchOptions;

        // Get Random Proxy
        const proxy_profile = ProxyController.getInstance().getRandomProxy;
        if (proxy_profile != null) {
            options.proxy = proxy_profile
            console.log('Using Proxy: ' + proxy_profile.server);
        }

        // Launch Playwright
        const browser = await playwright.chromium.launch(options);

        // Create Context
        const context = await browser.newContext({
            ignoreHTTPSErrors: true
        });

        // New Page
        const page = await context.newPage();

        // Go to URL
        await page.goto(url);

        // Wait for the page to finish loading
        await page.waitForSelector('body');

        // Wait for the page to finish loading
        if (wait > 0) {
            await this.sleep(wait * 1000);
        }

        // Take Screenshot
        const screenshot = await page.screenshot({ fullPage: true });

        // Close Browser
        await browser.close();

        // Return Screenshot
        return screenshot;
    }

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}