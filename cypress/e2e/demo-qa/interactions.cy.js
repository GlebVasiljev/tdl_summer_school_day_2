// import page objects

context("Interactions", () => {
  context("Selectable", () => {
    // Create SelectablePage page object
    // Create scenario 1:
    it('scenario 1', () => {
        cy.visit('https://demoqa.com/selectable');
        cy.contains('Cras justo odio').click();
        cy.contains('Cras justo odio').should('have.class', 'mt-2 list-group-item active list-group-item-action');
        cy.contains('Dapibus ac facilisis in').click();
        cy.contains('Dapibus ac facilisis in').should('have.class', 'mt-2 list-group-item active list-group-item-action');;

      });
    // Click on "Cras justo odio"
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    // Validate that chosen buttons contains class active

    it('scenario 2', () =>{
      cy.visit('https://demoqa.com/selectable');

      cy.get('[id="demo-tab-grid"]').click();

      cy.contains('Four').click();
      cy.contains('Eight').click();
      cy.contains('Six').click();
      cy.contains('Two').click();

      cy.contains('Four').should('have.class','list-group-item active list-group-item-action');
      cy.contains('Eight').should('have.class','list-group-item active list-group-item-action');
      cy.contains('Six').should('have.class','list-group-item active list-group-item-action');
      cy.contains('Two').should('have.class','list-group-item active list-group-item-action');
    });
    // Create scenario 2:
    // Click on grid
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active
  });
});
