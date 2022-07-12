import BasePage from "./basePage";

class RadioButtonPage extends BasePage {
    static get url() {
        return "/radio-button";
    }
    static get yesRadio() {
        return cy.get('[id="yesRadio"]');
    }
    static get validation() {
        return cy.get('[class="text-success"]');
    }
    static get impressiveRadio() {
        return cy.get('[id="impressiveRadio"]');
    }
    static get noRadio() {
        return cy.get('[class="custom-control-input disabled"]');
    }
    static get result() {
        return cy.get('[class="text-success"]');
    }
    static get noButton(){
        return cy.get('[id="noRadio"]');
    }

}

export default RadioButtonPage;