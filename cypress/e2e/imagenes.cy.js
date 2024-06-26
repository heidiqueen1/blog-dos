describe('validar que cada contenedor tiene su imagen', () => {
    it('debe mostrar tres imagenes correctamente', () => {
        cy.get('img.imagen-testimonio', { timeout: 6000 })
        .should('be.visible') // Verificar que la imagen es visible
        .and('have.attr', 'src', '../imagenes/pexels-${props.imagen}.jpg') // Verificar que el atributo src es el esperado
        .and('have.attr', 'alt', 'Foto de playa'); // Verificar que el atributo alt es el esperado
      
    });
 
  });