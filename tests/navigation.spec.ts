import { test, expect } from '@playwright/test';

test.describe('導覽列與首頁元素 (Navigation & Home elements)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // 等待載入動畫完成，導覽列出現
    await expect(page.getByRole('navigation')).toBeVisible({ timeout: 30_000 });
  });

  test('首頁標題與核心主視覺正確渲染', async ({ page }) => {
    await expect(page).toHaveTitle('喵立翰 Miao Li-Han 2024 立委參選人');

    // 候選人名稱與口號
    await expect(page.getByText('台灣的明天 喵先鋪路').first()).toBeVisible();
    await expect(page.getByText('2024 立委參選人').first()).toBeVisible();
    await expect(page.getByText('喵立翰 Miao Li-Han').first()).toBeVisible();

    // 跑馬燈內容
    await expect(page.getByText('為喵星人，護台灣!').first()).toBeVisible();
  });

  test('導覽列連結能正確對應到各錨點區塊', async ({ page }) => {
    const nav = page.getByRole('navigation');

    const advocateLink = nav.getByRole('link', { name: '候選人主張' });
    const eventsLink = nav.getByRole('link', { name: '最新活動' });
    const policyLink = nav.getByRole('link', { name: '政策議題' });
    const donateLink = nav.getByRole('link', { name: '小額捐款' });
    const emailLink = nav.getByRole('link', { name: '民眾服務信箱' });

    await expect(advocateLink).toHaveAttribute('href', '#advocate');
    await expect(eventsLink).toHaveAttribute('href', '#newActive');
    await expect(policyLink).toHaveAttribute('href', '#policy');
    await expect(donateLink).toHaveAttribute('href', '#donate');
    await expect(emailLink).toHaveAttribute('href', '#email');

    // 點擊導覽列連結能正常滾動至對應區塊
    await advocateLink.click();
    await expect(page.locator('#advocate')).toBeInViewport();

    await eventsLink.click();
    await expect(page.locator('#newActive')).toBeInViewport();

    await policyLink.click();
    await expect(page.locator('#policy')).toBeInViewport();
  });

  test('頁尾競選總部與版權資訊完整顯示', async ({ page }) => {
    await page.locator('footer, .navbar-brand, body').first().scrollIntoViewIfNeeded();

    await expect(page.getByText('© 2023 喵立翰 Miao Li-Han 版權所有').first()).toBeVisible();
    await expect(page.getByText('競選總部').first()).toBeVisible();
    await expect(page.getByText('辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓').first()).toBeVisible();
    await expect(page.getByText('電話：(02) 888-5678').first()).toBeVisible();
    await expect(page.getByText('電子郵件地址：meowoffice@linmeow.tw').first()).toBeVisible();
  });
});

