import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get userName(){
    return cy.get("[id='userName']");
  }
  static get userEmail() {
    return cy.get('[id="userEmail"]');
  }
  
  static get firstAddress() {
    return cy.get('[id="currentAddress"]');
  }
  
  static get secondAddress() {
    return cy.get('[id="permanentAddress"]');
  }
  
  static get submit() {
    return cy.get("#submit");
  }
  
  static get validateUserName() {
    return cy.get('[id="name"]');
  }
  
  static get validateUserEmail() {
    return cy.get('[id="email"]');
  }
  
  static get validateFirstAddress() {
    return cy.get("[id='currentAddress']");
  }
  
  static get validateSecondAddress() {
    return cy.get("[id='permanentAddress']");
  }
}

export default TextBoxPage;
