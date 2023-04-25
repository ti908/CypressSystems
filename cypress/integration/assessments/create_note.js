/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import Modal from "../objects/login_modal"
import Dashboard from "../objects/dashboard"
import 'cypress-iframe'

describe('Login, Create note, Logout', () => {
  const email = 'martinwalterampah@gmail.com'
  const password = 'TestBug123#'

  before('Opens login page', () => {
    // Visit Evernote homepahe
    cy.visit('https://www.evernote.com/')
    //cy.visit('https://sandbox.evernote.com/Login.action')
    // Click on the login button to open the loginpage
    // cy.get('.utility-nav ul>li').eq(1).then($login => {
    //   cy.wrap($login).click()
    // })
    cy.get('.utility-nav > ul > :nth-child(2) > a').click()

    //Check that the login modal is visible before proceeding
    //cy.get(Modal.modal).should('be.visible')

    // Log in with email and password
    cy.get(Modal.emailField).click().type(email)
    cy.get(Modal.loginButton).click()
    cy.wait(1000) // Wait for password field to show
    cy.get(Modal.passwordField).click().type(password)
    cy.get(Modal.loginButton).click()

    // Wait for the dashboard to load
    cy.wait(30000) 
  })

  it('Creates a note and logs out', () => {
    cy.log('Create a new note')
    //cy.get(Dashboard.newMenu).click()
    //cy.get('.gFTtUgofaZevRPuVgjwI QCwJEvrfOE_RJqpnMZ6Y P82zRl6hXywGPP7tkBPu ZDFRlrduWQM7RqAI0Vsq').click()
    cy.get(Dashboard.newMenu).click()
    cy.get(Dashboard.newNote).click()
    cy.wait(7000)

    cy.frameLoaded('#qa-COMMON_EDITOR_IFRAME [title="Note Editor"]')
    cy.iframe().find(Dashboard.noteTitle).type('Kotiski')
    //cy.iframe().find("h1[class*='pricing-title']")

    //cy.get(Dashboard.noteTitle).type('Kotiski')

    cy.log('Log out')
    cy.get(Dashboard.myAccount).click()
    cy.get(Dashboard.logoutButton).click()
    cy.wait(6000)
    cy.get(Dashboard.logoutConfirm).click()
    cy.wait(10000) // wait for page to logout
    cy.get('.logout-content')
      .should('contain', 'You have logged out of Evernote.')
  })
})