describe('Formulario de Registro prueba de campo nombre  y correo como campos obligatorios', () => {
    it('debe mostrar todos los campos y enviar correctamente', () => {
      cy.visit('http://localhost:3000/'); // Asume que el formulario está en la página principal
      cy.get('input[name="nombre"]').type('Juan');
      cy.get('input[name="correo"]').type('juan@example.com');
      cy.get('input[type="submit"]').click();
      cy.contains('Todos los campos son obligatorios').should('not.exist');
    });
 
    it('debe mostrar un mensaje de error si los campos están vacíos', () => {
      cy.visit('http://localhost:3000/');
      cy.get('input[type="submit"]').click();
      cy.contains('Este dato es requerido').should('be.visible');
    });
  });
