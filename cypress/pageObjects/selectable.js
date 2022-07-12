import BasePage from "./basePage";

class Selectable extends BasePage {
  static get url() {
    return "/selectable";
  }
  static get firstString(){
    return cy.contains('Cras justo odio');
  }
  static get secondString(){
    return cy.contains('Dapibus ac facilisis in');
  }
  static get openGrid(){
    return cy.get('[id="demo-tab-grid"]');
  }
  static get number4(){
    return cy.contains('Four');
  }
  static get number8(){
    return cy.contains('Eight');
  }
  static get number6(){
    return cy.contains('Six');
  }
  static get number2(){
    return cy.contains('Two');
  }
}
export default Selectable;