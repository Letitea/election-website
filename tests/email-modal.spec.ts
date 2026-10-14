import { test, expect } from '@playwright/test';

test.describe('民眾服務信箱 (citizen service mailbox)', () => {
  test('user can fill in and submit the feedback form, then close the modal', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('喵立翰 Miao Li-Han 2024 立委參選人');

    // The nav is rendered only after the Lottie loading animation finishes.
    const nav = page.getByRole('navigation');
    await expect(nav.getByRole('link', { name: '民眾服務信箱' })).toBeVisible({ timeout: 30_000 });

    // Open the mailbox modal via the "填寫表單" call-to-action.
    // It is a clickable <div>, not a button, so it has no button role.
    await page.getByText('填寫表單', { exact: true }).filter({ visible: true }).first().click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText('民眾服務信箱').first()).toBeVisible();

    // The modal template renders a desktop copy and a mobile (xs) copy of the form.
    // Observed: flex-layout only hides the inactive copy after a later change-detection
    // cycle, so both copies can be visible right after opening. At this desktop viewport
    // the desktop copy is the first one in the DOM, so target it explicitly.
    const submit = dialog.getByRole('button', { name: '送出意見' });
    await expect(submit.first()).toBeVisible();

    // Fill in the form using the Material form-field labels.
    const name = dialog.getByRole('textbox', { name: '姓名', exact: true }).first();
    const email = dialog.getByRole('textbox', { name: 'email', exact: true }).first();
    const phone = dialog.getByRole('spinbutton', { name: '手機號碼', exact: true }).first();
    const message = dialog.getByRole('textbox', { name: '輸入內容', exact: true }).first();

    await name.fill('王小明');
    await email.fill('test@example.com');
    await phone.fill('0912345678');
    await message.fill('希望增加更多流浪貓收容所');

    await expect(name).toHaveValue('王小明');
    await expect(email).toHaveValue('test@example.com');
    await expect(phone).toHaveValue('0912345678');
    await expect(message).toHaveValue('希望增加更多流浪貓收容所');

    // Submit.
    await submit.first().click();

    // Success state replaces the form (in both template copies, via *ngIf).
    await expect(dialog.getByText('感謝您的意見').first()).toBeVisible();
    await expect(submit).toHaveCount(0);
    await expect(name).toHaveCount(0);

    // Close the modal.
    await dialog.getByRole('button', { name: '關閉' }).first().click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  test('user can open the modal and close it directly using the top-right close icon', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible({ timeout: 30_000 });

    await page.getByText('填寫表單', { exact: true }).filter({ visible: true }).first().click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    await dialog.locator('.bi-x').first().click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });
});

