import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";
import WebTablePage from "../../pageObjects/webTablePage"
import ButtonsPage from "../../pageObjects/buttonsPage"
context("Elements Page", () => {

  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    it('Shoud fill', () => {
      TextBoxPage.userName.click().type('Gleb');
      TextBoxPage.userEmail.click().type('glebsvasiljevs@gmail.com');
      TextBoxPage.firstAddress.click().type('Pils iela 45');
      TextBoxPage.secondAddress.click().type('Pils iela 54');

      //Press submit
      TextBoxPage.submit.click();

      //Validate
      TextBoxPage.validateUserName.should('have.text', 'Name:Gleb');
      TextBoxPage.validateUserEmail.should("have.text", 'Email:glebsvasiljevs@gmail.com');
      TextBoxPage.validateFirstAddress.should('have.text', 'Current Address :Pils iela 45 ');
      TextBoxPage.validateSecondAddress.should('have.text', 'Permananet Address :Pils iela 54 ');
    });
  });


  context("Check box scenarios", () => {

    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it('scenario 1', () => {

      // Click the "+"/expand button
      CheckBoxPage.expandButton.click();

      // Click Notes, React, Angular, General, Excel File.doc
      CheckBoxPage.list.contains('Notes').click();
      CheckBoxPage.list.contains('React').click();
      CheckBoxPage.list.contains('Angular').click();
      CheckBoxPage.list.contains('General').click();
      CheckBoxPage.list.contains('Excel File.doc').click();

      // Validate the clicked checkboxes
      CheckBoxPage.validation.should('contain', 'notes');
      CheckBoxPage.validation.should('contain', 'react');
      CheckBoxPage.validation.should('contain', 'angular');
      CheckBoxPage.validation.should('contain', 'general');
      CheckBoxPage.validation.should('contain', 'excelFile');

    });

    it('scenario 2', () => {

      // Click expand button
      CheckBoxPage.expandButton.click();

      // Click Office
      CheckBoxPage.list.contains('Office').click();

      // Validate the checked checkboxes
      CheckBoxPage.validation.should('contain', 'office');
      CheckBoxPage.validation.should('contain', 'public');
      CheckBoxPage.validation.should('contain', 'private');
      CheckBoxPage.validation.should('contain', 'classified');
      CheckBoxPage.validation.should('contain', 'general');

    });
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });

    it('Scenario 1', () => {

      // Click yesButton
      RadioButtonPage.yesRadio.check({ force: true });

      // validate the message
      RadioButtonPage.validation.should('have.text', 'Yes');

      // click impressiveButton
      RadioButtonPage.impressiveRadio.check({ force: true });

      // validate the message
      RadioButtonPage.result.should('have.text', 'Impressive');

      // noButton - validate that the button exists but is disabled
      RadioButtonPage.noButton.should('be.disabled');

    });
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablePage.visit();

    });
    it('Scenario 1', () => {
      // Click add record button
      WebTablePage.addRecord.click();

      // fill in the necessary information
      WebTablePage.addUserFirstName.click().type('Gleb');
      WebTablePage.addUserLastName.click().type('Vasiljev');
      WebTablePage.addUserEmail.click().type('glebsvasiljevs@gmail.com');
      WebTablePage.addUserAge.click().type('18');
      WebTablePage.addUserSalary.click().type('100');
      WebTablePage.addUserDepartment.click().type('None');

      // click submit button
      WebTablePage.submit.click();

      // search for the user based on previously added information
      WebTablePage.userTable.contains('GlebVasiljev18glebsvasiljevs@gmail.com100None');

      // validate tha the user is visible
      WebTablePage.userTable.contains('Gleb').should('be.visible');
      WebTablePage.userTable.contains('Vasiljev').should('be.visible');
      WebTablePage.userTable.contains('glebsvasiljevs@gmail.com').should('be.visible');
      WebTablePage.userTable.contains('18').should('be.visible');
      WebTablePage.userTable.contains('100').should('be.visible');
      WebTablePage.userTable.contains('None').should('be.visible');
    });

    // Create Scenario 2:
    it('Scenario 2', () => {
      
      // Delete all table rows
      WebTablePage.removeTable1.click();
      WebTablePage.removeTable2.click();
      WebTablePage.removeTable3.click();

      // Validate that we see text - No rows found
      WebTablePage.validateRemovedTable.should('be.visible');
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();

    });
    it('scenario 1', () => {

      // Click Double click button
      ButtonsPage.doubleClick.dblclick();

      // Validate the double click message
      ButtonsPage.doubleClickValidation.should('have.text', 'You have done a double click');
      
      // Click rightclick button
      ButtonsPage.rightClick.rightclick();

      // Validate the right click message
      ButtonsPage.rightClickValidation.should('have.text', 'You have done a right click');
      
      // Do dynamic click
      ButtonsPage.dynamicClick.click();
      
        // Validate dynamic click message
      ButtonsPage.DynamicClickValidation.should('have.text', 'You have done a dynamic click');
    });
  });
});
