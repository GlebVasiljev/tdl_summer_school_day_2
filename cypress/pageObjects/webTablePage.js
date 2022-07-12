import BasePage from "./basePage";

class WebTablePage extends BasePage {
    static get url() {
        return "/webtables";
    }
    static get addRecord() {
        return cy.get('[id="addNewRecordButton"]');
    }
    static get addUserFirstName() {
        return cy.get('[id="firstName"]');
    }
    static get addUserLastName() {
        return cy.get('[id="lastName"]');
    }
    static get addUserEmail() {
        return cy.get('[id="userEmail"]');
    }
    static get addUserAge() {
        return cy.get('[id="age"]');
    }
    static get addUserSalary() {
        return cy.get('[id="salary"]');
    }
    static get addUserDepartment() {
        return cy.get('[id="department"]');
    }
    static get submit() {
        return cy.get('[id="submit"]');
    }
    static get userTable() {
        return cy.get('[class="rt-tr-group"]');
    }
    static get removeTable1() {
        return cy.get('[id="delete-record-1"]');
    }
    static get removeTable2() {
        return cy.get('[id="delete-record-2"]');
    }

    static get removeTable3() {
        return cy.get('[id="delete-record-3"]');
    }
    static get validateRemovedTable() {
        return cy.get('[class="rt-noData"]');
    }
}

export default WebTablePage;