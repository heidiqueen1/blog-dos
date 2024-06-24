module.exports = { helloFlow };
const { expect } = require('@playwright/test');


async function helloFlow(page) {
 
    await page.goto('http://localhost:3000/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Blog H.Sánchez');

     // Expects page to have a heading with the name of Installation.
     await expect(page.getByRole('heading', { name: 'Mi blog personal' })).toBeVisible();

 
}