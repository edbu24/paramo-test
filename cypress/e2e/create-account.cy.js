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
        /**
         * Avoid the API call failed and continue the test
         */
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('/',{failOnStatusCode: false})
        //At the test begin close the welmcome message clicking on "Got it"
        homePage.closeWelcomeMessage()
    })

    it('[Create account] - Validate account is created successfully', () => {
        homePage.signupButton.click()
        //Method to create account 
        signupPage.createAccount()
        //Validate at the end the CONGRATULATIONS! message is shown
        registrationPage.congratulationTitle.should('have.text', CONGRATULATIONS_MESSAGE)
    })
})