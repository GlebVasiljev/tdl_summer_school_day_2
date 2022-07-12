import Selectable from "../../pageObjects/selectable";

context("Interactions", () => {
  context("Selectable", () => {
    beforeEach(() => {
      Selectable.visit();

    });
    
    
    it('scenario 1', () => {
      Selectable.firstString.click();
      Selectable.firstString.should('have.class', 'mt-2 list-group-item active list-group-item-action');
      Selectable.secondString.click();
      Selectable.secondString.should('have.class', 'mt-2 list-group-item active list-group-item-action');;
      });

    it('scenario 2', () =>{

      Selectable.openGrid.click();

      Selectable.number4.click();
      Selectable.number8.click();
      Selectable.number6.click();
      Selectable.number2.click();

      Selectable.number4.should('have.class','list-group-item active list-group-item-action');
      Selectable.number8.should('have.class','list-group-item active list-group-item-action');
      Selectable.number6.should('have.class','list-group-item active list-group-item-action');
      Selectable.number2.should('have.class','list-group-item active list-group-item-action');
    });
   
  });
});
