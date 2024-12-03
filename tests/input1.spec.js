// @ts-check
const { test, expect } = require('@playwright/test');

const sleep = (ms) =>{
  return new Promise((resolve) => setTimeout(resolve, ms));
;}
test('Open web page demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill('test123');

  await sleep(4000);
  await page.screenshot({ path: 'screenshot.png' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);
});
