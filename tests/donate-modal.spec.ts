import { test, expect } from '@playwright/test';

test.describe('小額捐款 (Donate Modal)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible({ timeout: 30_000 });

    // 滾動至小額捐款區塊並點擊按鈕開啟彈窗
    const donateSection = page.locator('#donate');
    await donateSection.scrollIntoViewIfNeeded();
    await donateSection.locator('.btnhover').click();

    // 確認彈窗已正常開啟
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('dialog').getByText('小額捐款').first()).toBeVisible();
  });

  test('未選擇任何捐款方案時，點擊前往捐款會顯示警告提示', async ({ page }) => {
    const dialog = page.getByRole('dialog');
    const submitBtn = dialog.getByRole('button', { name: '前往捐款' }).first();

    await submitBtn.click();

    const alert = dialog.locator('ngb-alert').first();
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('尚未選擇任何捐款方式!');
  });

  test('選擇固定方案（喵星人之友）能成功捐款並顯示感謝畫面', async ({ page }) => {
    const dialog = page.getByRole('dialog');
    const plan = dialog.getByText('喵星人之友').first();
    await plan.click();

    // 檢查已選取樣式
    await expect(dialog.locator('.selected').first()).toBeVisible();

    // 點擊前往捐款
    await dialog.getByRole('button', { name: '前往捐款' }).first().click();

    // 成功畫面展示
    await expect(dialog.getByText('感謝您的捐款').first()).toBeVisible();

    // 點擊關閉按鈕，彈窗關閉
    await dialog.getByRole('button', { name: '關閉' }).first().click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  test('選擇自訂贊助金額但未填寫時，點擊前往捐款會顯示警告提示', async ({ page }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByText('自訂贊助金額').first().click();

    await dialog.getByRole('button', { name: '前往捐款' }).first().click();

    const alert = dialog.locator('ngb-alert').first();
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('尚未輸入自訂贊助金額!');
  });

  test('輸入自訂贊助金額後能成功捐款', async ({ page }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByText('自訂贊助金額').first().click();

    const customInput = dialog.getByRole('spinbutton', { name: 'NT$ 輸入金額' }).first();
    await customInput.fill('6666');
    await expect(customInput).toHaveValue('6666');

    await dialog.getByRole('button', { name: '前往捐款' }).first().click();

    await expect(dialog.getByText('感謝您的捐款').first()).toBeVisible();
  });

  test('點擊彈窗右上角叉叉能關閉彈窗', async ({ page }) => {
    const dialog = page.getByRole('dialog');
    await dialog.locator('.bi-x').first().click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });
});

