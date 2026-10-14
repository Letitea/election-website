import { test, expect } from '@playwright/test';

test.describe('最新活動 (Latest Events)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible({ timeout: 30_000 });
  });

  test('點擊活動卡片能開啟最新活動彈窗並檢視詳細內容', async ({ page }) => {
    const eventsSection = page.locator('#newActive');
    await eventsSection.scrollIntoViewIfNeeded();

    // 點擊第一個活動卡片
    const firstCard = eventsSection.locator('.divhover').first();
    await expect(firstCard).toBeVisible();
    await firstCard.click();

    // 驗證彈窗
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText('最新活動').first()).toBeVisible();

    // 驗證社群分享按鈕與更多活動推薦清單
    await expect(dialog.getByText('分享').first()).toBeVisible();
    await expect(dialog.getByText('更多活動').first()).toBeVisible();

    // 點擊右上角叉叉關閉
    await dialog.locator('.bi-x').first().click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  test('點擊列表中的第二個活動能顯示正確活動標題', async ({ page }) => {
    const eventsSection = page.locator('#newActive');
    await eventsSection.scrollIntoViewIfNeeded();

    // 尋找包含「收容所模特兒大比拼！」的活動卡片
    const targetCard = eventsSection.locator('.divhover').filter({ hasText: '收容所模特兒大比拼！' }).first();
    await expect(targetCard).toBeVisible();
    await targetCard.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText('收容所模特兒大比拼！').first()).toBeVisible();

    await dialog.locator('.bi-x').first().click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });
});

