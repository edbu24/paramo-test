/// <reference types="cypress"/>

export class SignUpPage{
    get signupTitle() {
        return cy.get('.page__title')
    }

    get emailInput() {
        return cy.get('input[placeholder="Email"]')
    }

    get termsAndConditionCheckbox() {
        return cy.get('label').contains('I unconditionally agree with ')
    }

    get currencyDropdown() {
        return cy.get('b[class="selectric__button icon-arrow-down"]').eq(1)
    }

    get currencyList() {
        return cy.get('div[class="selectric-scroll"]').eq(1)
    }

    get currencyOptionSelected() {
        return cy.get('span[class="label"]').eq(1)
    }

    get passwordInput() {
        return cy.get('input[placeholder="Password"]')
    }

    get reenterPasswordInput() {
        return cy.get('input[placeholder="Reenter password"]')
    }

    get noBonusCheckpoint() {
        return cy.get('span[contains(text(),"No bonus")]')
    }

    get createAccountButton() {
        return cy.get('.button.button--s4.button--t1 ')
    }

    /**
     * Verify iff the currency selected is USD should select the no Bonus checkpoint
     * @param {string} currency 
     */
    selectCurrency(currency) {
        this.currencyDropdown.click();
        this.currencyList.contains(currency).click();
        this.currencyOptionSelected.then((currencySelected) => {
            if(currencySelected.text() === 'USD'){
                this.noBonusCheckpoint.click()
            }
        })
    }

    /**
     * Fillout all the mandatory fields on the register
     * Email is generate by the Date.now() so every time will be create a new email
     */
    createAccount() {
        this.emailInput.type(`${Date.now()}@testemail.com`)
        this.termsAndConditionCheckbox.click()
        this.selectCurrency(Cypress.env('CURRENCY'))
        this.passwordInput.type(Cypress.env('PASSWORD'))
        this.reenterPasswordInput.type(Cypress.env('REENTERPASS'))
        this.createAccountButton.click()
    }
}