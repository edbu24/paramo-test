/// <reference types="cypress" />
import { HomePage } from "../page-actions/home-page"
import { SignUpPage } from "../page-actions/signup-page";
import { RegistrationPage } from "../page-actions/registration-page";
import { CONGRATULATIONS_MESSAGE } from "../consts/test-constants";

const homePage = new HomePage();
const signupPage = new SignUpPage();
const registrationPage = new RegistrationPage();

describe('test', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('/',{failOnStatusCode: false})
        homePage.closeWelcomeMessage()
    })

    it('test test', () => {
        homePage.signupButton.click()
        signupPage.createAccount()
        registrationPage.congratulationTitle.should('have.text', CONGRATULATIONS_MESSAGE)
    })
})