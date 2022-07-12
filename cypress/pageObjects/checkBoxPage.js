import BasePage from "./basePage";

class CheckBoxPage extends BasePage {

  static get url() {
    return "/checkbox";
  }

  static get expandButton() {
    return cy.get ('[class="rct-option rct-option-expand-all"]');
  }

  static get list() {
    return cy.get("ol");
  }

  static get validation() {
    return cy.get ('[class="display-result mt-4"]');
  }
}

export default CheckBoxPage;
