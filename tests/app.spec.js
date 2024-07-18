const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Blog H.Sánchez');

     // Expects page to have a heading with the name of Installation.
     await expect(page.getByRole('heading', { name: 'El blog del trabajo remoto' })).toBeVisible();
  });

 