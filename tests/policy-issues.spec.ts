import { test, expect } from '@playwright/test';

test.describe('政策議題 (Policy Issues & Swiper)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible({ timeout: 30_000 });
  });

  test('點擊當前政策卡片的「查看」按鈕能打開政策詳情彈窗', async ({ page }) => {
    // 透過導覽列平滑滾動至政策議題區塊
    await page.getByRole('navigation').getByRole('link', { name: '政策議題' }).click();
    await expect(page.locator('#policy')).toBeInViewport();

    // Swiper 在載入時會執行 slideNext() 且動畫時間為 800ms，等待輪播動畫平穩結束
    await page.waitForTimeout(1200);

    // 點擊當前 active 輪播卡片上的「查看」按鈕
    const activeViewBtn = page.locator('swiper-container .swiper-slide-active .btnhover').first();
    await expect(activeViewBtn).toBeVisible();
    await activeViewBtn.click();

    // 彈窗展示
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText('政策議題').first()).toBeVisible();

    // 驗證政策內容項目
    await expect(dialog.getByText('設立寵物醫療基金').first()).toBeVisible();
    await expect(dialog.getByText('提供醫療補助').first()).toBeVisible();
    await expect(dialog.getByText('更多政策議題').first()).toBeVisible();

    // 點擊右上角叉叉關閉彈窗
    await dialog.locator('.bi-x').first().click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });
});
