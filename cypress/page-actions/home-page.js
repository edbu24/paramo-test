/// <reference types="cypress"/>
export class HomePage{
    get gotitButton() {
        return cy.get('.button.button--s2.button--t1').contains('Got it')
    }

    get signupButton() {
        return cy.get('.header-button--registration')
    }

    closeWelcomeMessage() {
        this.gotitButton.click()
    }
}