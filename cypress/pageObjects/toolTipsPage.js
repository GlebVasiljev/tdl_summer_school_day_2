import BasePage from "./basePage";

class ToolTipsPage extends BasePage {
    static get url() {
        return "/tool-tips";
    }
    static get hoverMeField() {
        return cy.get('#toolTipButton');
    }

    static get hoverMeFieldValidation() {
        return cy.get('[aria-describedby="buttonToolTip"]');
    }

    static get inputField() {
        return cy.get('#toolTipTextField');
    }

    static get inputFieldValidation() {
        return cy.get('[id="toolTipTextField"]');
    }

    static get hoverContraryValidation() {
        return cy.get('[aria-describedby="contraryTexToolTip"]');
    }

    static get hoverSection() {
        return cy.get('[href="javascript:void(0)"]').contains('1.10.32');
    }

    static get hoverSectionValidation() {
        return cy.get('[aria-describedby="sectionToolTip"]');
    }

    static validateText() {
        return this.Contrary.contains(/^Contrary/).trigger('mouseover');
    }

    static validateNumber() {
        return this.Contrary.contains(/^1.10.32/).trigger('mouseover');
    }

    static get textInHoverFieldValidation(){
        return cy.get('[class="tooltip-inner"]');
    }
}

export default ToolTipsPage;