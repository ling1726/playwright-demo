import { test, expect } from '@playwright/test';
import { TestPage } from './page';

test('should open share dialog', async ({ page }) => {
  const testPage = new TestPage(page);
  await testPage.goto();

  await testPage.openShareDialog();
  await expect(testPage.shareDialog).toContainText("About us.docx");
});

test('should copy link', async ({ page }) => {
  const testPage = new TestPage(page);
  await testPage.goto();

  await testPage.openShareDialog();
  await testPage.copyLink();
  await expect(testPage.copyLinkButton).toHaveText("Link copied!");
});

test('should trap focus inside share dialog', async ({ page }) => {
  const testPage = new TestPage(page);
  await testPage.goto();

  await testPage.openShareDialog();
  for(let i=0;i<3;i++) {
    await page.keyboard.press('Tab');
  }

  await expect(testPage.copyLinkButton).toBeFocused();
});

test('should close dialog with Escape key and restore focus to share button', async ({ page }) => {
  const testPage = new TestPage(page);
  await testPage.goto();

  await testPage.openShareDialog();
  await page.keyboard.press('Escape');

  await expect(testPage.shareDialog).not.toBeVisible();
  await expect(testPage.shareButton).toBeFocused();
});
