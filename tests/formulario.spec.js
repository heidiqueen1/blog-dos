const { test, expect } = require('@playwright/test');

test('Formulario de registro', async ({ page }) => {
  // Navegar a la página con el formulario de registro
  await page.goto('http://localhost:3000/');

  // Completar el campo de nombre
  await page.fill('input[name="nombre"]', 'Juan Pérez');

  // Completar el campo de correo electrónico
  await page.fill('input[name="correo"]', 'juan.perez@example.com');
  

  // Hacer clic en el botón de enviar
  await page.click('input[type="submit"]');


// Loguear el mensaje de confirmación en la consola
   console.log('¡Datos agregados exitosamente!');

});