import { test, expect } from '@playwright/test';

test.describe('Donation Modal Feature', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to application root
    await page.goto('/');

    // Wait for initial Angular splash / loading animation to finish (destroyLoading = true after ~3s)
    await expect(page.getByText('喵立翰 Miao Li-Han').first()).toBeVisible({ timeout: 15_000 });
  });

  test('should display page title and candidate headline', async ({ page }) => {
    await expect(page).toHaveTitle('喵立翰 Miao Li-Han 2024 立委參選人');
    await expect(page.getByText('台灣的明天 喵先鋪路').first()).toBeVisible();
  });

  test('should show validation error when attempting to donate without selecting a plan', async ({ page }) => {
    // Open donation modal
    const donateTrigger = page.locator('.btnhover', { hasText: '小額捐款' }).filter({ visible: true }).first();
    await donateTrigger.click();

    const modal = page.locator('app-donatemodal');
    await expect(modal).toBeVisible();
    await expect(modal.locator('.modal-title')).toHaveText('小額捐款');

    // Attempt to donate without selecting a plan
    const submitBtn = modal.getByRole('button', { name: '前往捐款' }).filter({ visible: true });
    await submitBtn.click();

    // Verify error alert
    const alert = modal.locator('ngb-alert').filter({ visible: true });
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('尚未選擇任何捐款方式!');

    // Close modal via close icon
    const closeIcon = modal.locator('.modal-header i.bi-x');
    await closeIcon.click();
    await expect(modal).not.toBeAttached();
  });

  test('should complete donation successfully with a predefined plan', async ({ page }) => {
    // Open donation modal
    const donateTrigger = page.locator('.btnhover', { hasText: '小額捐款' }).filter({ visible: true }).first();
    await donateTrigger.click();

    const modal = page.locator('app-donatemodal');
    await expect(modal).toBeVisible();

    // Select predefined tier: 喵星人之友 (NT$ 600)
    const planOption = modal.locator('.btnhover', { hasText: '喵星人之友' }).filter({ visible: true });
    await planOption.click();

    // Submit donation
    const submitBtn = modal.getByRole('button', { name: '前往捐款' }).filter({ visible: true });
    await submitBtn.click();

    // Verify confirmation and success message
    const thankYou = modal.getByText('感謝您的捐款').filter({ visible: true });
    await expect(thankYou).toBeVisible();

    // Close modal via close button
    const closeBtn = modal.getByRole('button', { name: '關閉' }).filter({ visible: true });
    await closeBtn.click();
    await expect(modal).not.toBeAttached();
  });

  test('should support custom donation amount flow with validation', async ({ page }) => {
    // Open donation modal
    const donateTrigger = page.locator('.btnhover', { hasText: '小額捐款' }).filter({ visible: true }).first();
    await donateTrigger.click();

    const modal = page.locator('app-donatemodal');
    await expect(modal).toBeVisible();

    // Select custom amount option
    const customPlan = modal.locator('.btnhover', { hasText: '自訂贊助金額' }).filter({ visible: true });
    await customPlan.click();

    // Submit without input to verify validation
    const submitBtn = modal.getByRole('button', { name: '前往捐款' }).filter({ visible: true });
    await submitBtn.click();
    const alert = modal.locator('ngb-alert').filter({ visible: true });
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('尚未輸入自訂贊助金額!');

    // Fill valid custom amount
    const amountInput = modal.locator('input[type="number"]').filter({ visible: true });
    await amountInput.fill('1200');

    // Submit donation
    await submitBtn.click();

    // Verify success state
    const thankYou = modal.getByText('感謝您的捐款').filter({ visible: true });
    await expect(thankYou).toBeVisible();

    // Close modal
    const closeBtn = modal.getByRole('button', { name: '關閉' }).filter({ visible: true });
    await closeBtn.click();
    await expect(modal).not.toBeAttached();
  });
});

