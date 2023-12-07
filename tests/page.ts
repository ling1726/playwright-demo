import { Locator, Page } from "@playwright/test";

export class TestPage {
  readonly page: Page;
  readonly shareButton: Locator;
  readonly copyLinkButton: Locator;
  readonly shareDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shareButton = page.locator("button", { hasText: "Share" });
    this.shareDialog = this.page.locator("[data-testid='share-dialog']");
    this.copyLinkButton= this.page.locator("[data-testid='copy-button']");
  }

  async goto() {
    await this.page.goto("http://localhost:5174", { waitUntil: 'networkidle' });
  }

  async openShareDialog() {
    await this.shareButton.click();
    await this.shareDialog.waitFor({ state: 'visible' });
  }

  async copyLink() {
    await this.copyLinkButton.waitFor({ state: 'visible' });
    await this.copyLinkButton.click();
  }
}
