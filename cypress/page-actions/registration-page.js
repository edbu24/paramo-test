/// <reference types="cypress"/>
export class RegistrationPage{
    get congratulationTitle() {
        return cy.get('.notification__title')
    }
}