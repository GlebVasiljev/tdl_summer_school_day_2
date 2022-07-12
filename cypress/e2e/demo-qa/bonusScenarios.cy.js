import ToolTipsPage from "../../pageObjects/toolTipsPage";

context("ToolTips scenarios", () => {
  beforeEach(() => {
    ToolTipsPage.visit();

  });
    it("ToolTips scenario 1", () => {
    ToolTipsPage.hoverMeField.trigger('mouseover');
    ToolTipsPage.hoverMeFieldValidation.should('be.visible');

    ToolTipsPage.inputField.trigger('mouseover');
    ToolTipsPage.inputFieldValidation.should('be.visible');

    ToolTipsPage.validateText();
    ToolTipsPage.hoverContraryValidation.should('be.visible');

    ToolTipsPage.validateNumber();
    ToolTipsPage.validateNumbers.should('be.visible');

    ToolTipsPage.textInHoverFieldValidation.should('contain', 'You hovered over the Button');
    ToolTipsPage.textInHoverFieldValidation.should('contain', 'You hovered over the text field');
    ToolTipsPage.textInHoverFieldValidation.should('contain', 'You hovered over the Contrary');
    ToolTipsPage.textInHoverFieldValidation.should('contain', 'You hovered over the 1.10.32');


  });

});