import BasePage from "./basePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }
  static get doubleClick(){
    return cy.get('[id="doubleClickBtn"]');
  }
  static get doubleClickValidation(){
    return cy.get('[id="doubleClickMessage"]');
  }
  static get rightClick(){
    return cy.get('[id="rightClickBtn"]');
  }
  static get rightClickValidation(){
    return cy.get('[id="rightClickMessage"]');
  }
  static get dynamicClick(){
    return cy.get('[class="btn btn-primary"]').contains(/^Click Me/);
  }
  static get DynamicClickValidation(){
    return cy.get('[id="dynamicClickMessage"]');
  }
  
}
export default ButtonsPage;