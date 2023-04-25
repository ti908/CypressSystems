/// <reference types="Cypress" />

import Modal from '../objects/login_modal'
import Dashboard from "../objects/dashboard"

describe('Login Successfully', () => {
  const email = 'martinwalterampah@gmail.com'
  const password = 'TestBug123#'

  before('Opens login page', () => {
    cy.visit('https://www.evernote.com/')
    //cy.get('.utility-nav ul>li').eq(1).then($login => {
    //cy.wrap($login).click()
    //})
    cy.get('.utility-nav > ul > :nth-child(2) > a').click()
    //Check that the login modal is visible before proceeding
    //cy.get(Modal.modal).should('be.visible')
  })

  it('Logs in successfully with email', () => {
    cy.get(Modal.emailField).click().type(email)
    cy.get(Modal.loginButton).click()
    cy.wait(1000) // Wait for password field to show
    cy.get(Modal.passwordField).click().type(password)
    cy.get(Modal.loginButton).click()

    //Wait and verify that login was successful
    cy.wait(30000)
    cy.get(Dashboard.myAccount).should('be.visible')
  })
})