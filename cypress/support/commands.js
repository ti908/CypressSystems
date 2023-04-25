// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//import Modal from "C:/Users/maggie/videoslots-submission/cypress../objects/login_modal"

// Cypress.Commands.add('login', () => { 
//     cy.visit('https://www.evernote.com/')
//     cy.get('.utility-nav > ul > :nth-child(2) > a').click()
//     //Check that the login modal is visible before proceeding
//     //cy.get(Modal.modal).should('be.visible')
//     cy.get(Modal.emailField).click().type('martinwalterampah@gmail.com')
//     cy.get(Modal.loginButton).click()
//     cy.wait(1000) // Wait for password field to show
//     cy.get(Modal.passwordField).click().type('TestBug123#')
//     cy.get(Modal.loginButton).click()
// })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })