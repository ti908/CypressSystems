/// <reference types="Cypress" />

import Modal from '../objects/login_modal'

describe('Fails Login', () => {
  const correctEmail = 'martinwalterampah@gmail.com'
  const wrongEmail = 'wrongemail@test.com'
  const wrongPassword = 'Wrong123#'

  beforeEach('Opens login page', () => {
    cy.visit('https://www.evernote.com/')
    // cy.get('.utility-nav ul>li').eq(1).then($login => {
    //   cy.wrap($login).click()
    // })
    cy.get('.utility-nav > ul > :nth-child(2) > a').click()
    //Check that the login modal is visible before proceeding
    //cy.get(Modal.modal).should('be.visible')
  })

  it('Logs in with wrong email', () => {
    cy.get(Modal.emailField).click().type(wrongEmail)
    cy.get(Modal.loginButton).click()
    cy.wait(1000) // Wait for error message to show
    cy.get(Modal.errorMessageEmail)
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 69, 57)')
      .and('have.text', 'There is no account for the username or email you entered.')
  })

  it('Logs in with wrong password', () => {
    cy.get(Modal.emailField).click().type(correctEmail)
    cy.get(Modal.loginButton).click()
    cy.wait(1000) // Wait for the password field to show
    cy.get(Modal.passwordField).type(wrongPassword)
    cy.get(Modal.loginButton).click()
    cy.wait(1000) // Wait for error message to show
    cy.get(Modal.errorMessagePassword)
      .should('be.visible')
      .and('have.css', 'color', 'rgb(204, 69, 57)')
      .and('include.text','Incorrect password')

   // cy.get(Dashboard.myAccount).should('not.be.visible')
  })
})