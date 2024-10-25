import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('customer/account/create/');
  });

test.describe('Create Account - Negative', () => {

    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'JohnDoe.test@gmail.com';
    const password = 'Test123456!';
    
    test('first name not filled', async ({ page }) => {
        // Filling out form excluding first name
        await page.getByLabel('First Name').click();
        await page.getByLabel('Last Name').click();
        await page.getByLabel('Last Name').fill(lastName);
        await page.getByLabel('Email', { exact: true }).click();
        await page.getByLabel('Email', { exact: true }).fill(email);
        await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
        await page.getByRole('textbox', { name: 'Password*', exact: true }).fill(password);
        await page.getByLabel('Confirm Password').click();
        await page.getByLabel('Confirm Password').fill(password);
        await page.getByRole('button', { name: 'Create an Account' }).click();
        // Verify 'This is a required field.' error message present
        await page.isVisible('#firstname-error');
        await expect(page.getByText('This is a required field.')).toBeVisible();
    });
  
    test('last name not filled', async ({ page }) => {
        // Filling out form excluding last name
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').fill(firstName);
        await page.getByLabel('Last Name').click();       
        await page.getByLabel('Email', { exact: true }).click();
        await page.getByLabel('Email', { exact: true }).fill(email);
        await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
        await page.getByRole('textbox', { name: 'Password*', exact: true }).fill(password);
        await page.getByLabel('Confirm Password').click();
        await page.getByLabel('Confirm Password').fill(password);
        await page.getByRole('button', { name: 'Create an Account' }).click();
        // Verify 'This is a required field.' error message present
        await page.isVisible('#lasttname-error');
        await expect(page.getByText('This is a required field.')).toBeVisible();
    });
  
    test('email not filled', async ({ page }) => {
        // Filling out form excluding email
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').fill(firstName);
        await page.getByLabel('Last Name').click();
        await page.getByLabel('Last Name').fill(lastName);     
        await page.getByLabel('Email', { exact: true }).click();       
        await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
        await page.getByRole('textbox', { name: 'Password*', exact: true }).fill(password);
        await page.getByLabel('Confirm Password').click();
        await page.getByLabel('Confirm Password').fill(password);
        await page.getByRole('button', { name: 'Create an Account' }).click();
        // Verify 'This is a required field.' error message present
        await page.isVisible('#email_address-error');
        await expect(page.getByText('This is a required field.')).toBeVisible();
    });
   
    test('password confirmation error', async ({ page }) => {
        // Filling out form with wrong password confirmation
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').fill(firstName);
        await page.getByLabel('Last Name').click();
        await page.getByLabel('Last Name').fill(lastName);     
        await page.getByLabel('Email', { exact: true }).click();   
        await page.getByLabel('Email', { exact: true }).fill(email);    
        await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
        await page.getByRole('textbox', { name: 'Password*', exact: true }).fill(password);
        await page.getByLabel('Confirm Password').click();
        await page.getByLabel('Confirm Password').fill('123456');
        await page.getByRole('button', { name: 'Create an Account' }).click();
        // Verify 'Please enter the same value again.' error message present
        await page.isVisible('#password-confirmation-error');
        await expect(page.getByText('Please enter the same value again.')).toBeVisible();
    });

});