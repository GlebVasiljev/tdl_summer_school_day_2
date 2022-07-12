import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
context("Elements Page", () => {

  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
    // Create texbox scenario
    it('Shoud fill', () => {
      cy.get('[id="userName"]').click().type('Gleb');
      cy.get('[id="userEmail"]').click().type('glebsvasiljevs@gmail.com');
      cy.get('[id="currentAddress"]').click().type('Pils iela 45');
      cy.get('[id="permanentAddress"]').click().type('Pils iela 54');
      //Press submit
      cy.get('#submit').click();
      //Validate
      cy.get('[id="name"]').should('have.text', 'Name:Gleb');
      cy.get('[id="email"]').should("have.text", 'Email:glebsvasiljevs@gmail.com');
      //cy.get('[id="currentAddress"]').should('have.text','Current Address :Pils iela 45 ');
      //cy.get('[id="permanentAddress"]').should('have.text','Permananet Address :Pils iela 54 ');
    });
  });


  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    beforeEach(() => {
      cy.visit('https://demoqa.com/checkbox');
    });
    // Create checkbox scenario 1:
    it('scenario 1', () => {
      // Click the "+"/expand button
      cy.get('[class="rct-option rct-option-expand-all"]').click();
      // Click Notes, React, Angular, General, Excel File.doc
      cy.get('[id="tree-node-workspace"]').check({ force: true });
      // Validate the clicked checkboxes
      cy.get('[class="rct-icon rct-icon-check"]').should('be.visible');
      cy.get('[class="rct-icon rct-icon-check"]').should('be.visible');
      cy.get('[class="rct-icon rct-icon-check"]').should('be.visible');
    });

    // Create checkbox scenario 2:
    it('scenario 1', () => {
      // Click expand button
      cy.get('[class="rct-option rct-option-expand-all"]').click();

      // Click Office
      cy.get('[id="tree-node-office"]').check({ force: true });
      
      // Validate the checked checkboxes
      cy.get('[class="text-success"]').should('have.text','officepublicprivateclassifiedgeneral');
      
    });
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object

    // Scenario 1:
    it('Scenario 1', () => {
      cy.visit('https://demoqa.com/radio-button');
      // Click yesButton
      cy.get('[id="yesRadio"]').check({ force: true });

      // validate the message
      cy.get('[class="text-success"]').should('have.text', 'Yes');

      // click impressiveButton
      cy.get('[id="impressiveRadio"]').check({ force: true });

      // validate the message
      cy.get('[class="text-success"]').should('have.text', 'Impressive');

      // noButton - validate that the button exists but is disabled
      cy.get('[id="noRadio"]').should('be.disabled');

    });
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    it('Scenario 1', () => {
      cy.visit('https://demoqa.com/webtables');
      // Click add record button
      cy.get('[id="addNewRecordButton"]').click();

      // fill in the necessary information
      cy.get('[id="firstName"]').click().type('Gleb');
      cy.get('[id="lastName-wrapper"]').click().type('Vasiljev');
      cy.get('[id="userEmail"]').click().type('glebsvasiljevs@gmail.com');
      cy.get('[id="age"]').click().type('18');
      cy.get('[id="salary"]').click().type('100');
      cy.get('[id="department"]').click().type('None');

      // click submit button
      cy.get('[id="submit"]').click();

      // search for the user based on previously added information
      cy.contains('GlebVasiljev18glebsvasiljevs@gmail.com100None');

      // validate tha the user is visible
      cy.contains('Gleb').should('be.visible');
    });

    // Create Scenario 2:
    it('Scenario 2', () => {
      cy.visit('https://demoqa.com/webtables');

      // Delete all table rows
      cy.get('[id="delete-record-1"]').click();
      cy.get('[id="delete-record-2"]').click();
      cy.get('[id="delete-record-3"]').click();
      // Validate that we see text - No rows found
      cy.get('[class="rt-noData"]').should('be.visible');
    });
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    it('scenario 1', () => {
      // Create Buttons page
      cy.visit('https://demoqa.com/buttons');
      // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
      // Click Double click button
      cy.get('[id="doubleClickBtn"]').dblclick()
      // Validate the double click message
      cy.get('[id="doubleClickMessage"]').should('have.text', 'You have done a double click');
      // Click rightclick button
      cy.get('[id="rightClickBtn"]').rightclick()
      // Validate the right click message
      cy.get('[id="rightClickMessage"]').should('have.text', 'You have done a right click');
      // Do dynamic click
      cy.contains('[class="btn btn-primary"]')
      .should('maxlength','9')
      .click();
      // Validate dynamic click message
      cy.get('[id="dynamicClickMessage"]').should('have.text', 'You have done a dynamic click');
    });
  });
});
