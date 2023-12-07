import { test, expect } from '@playwright/test';
import { TestPage } from './page';

test('Initial load', async ({ page }) => {
  const testPage = new TestPage(page);
  await testPage.goto();
  await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.1 });
});

test('Share dialog', async ({ page }) => {
  const testPage = new TestPage(page);
  await testPage.goto();
  await testPage.openShareDialog();
  await expect(testPage.shareDialog).toHaveScreenshot({ maxDiffPixelRatio: 0.1 });
});

test('responsive', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 640});
  const testPage = new TestPage(page);
  await testPage.goto();
  await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.1 });
});
