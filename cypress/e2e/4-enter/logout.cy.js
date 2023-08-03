import logout from '../../support/pageObject/logoutPage'
const loginInputan = require('../../fixtures/login.json')

describe('Tes Scenario Logout', () => {
    const Logout = new logout()
    beforeEach(() => {
        cy.visit('/login')
  })
    it('C11 Logout in dashboard', () => {
      //cy.get(':nth-child(3) > .form-control').type('kucingmp2000@gmail.com')
      Logout.inputUsername(loginInputan.validNama)

      //cy.get('.form-forgot > .form-control').type('burungmp2000')
      Logout.inputPassword(loginInputan.pass)

      //cy.get('.submit > .ps-btn').click()
      Logout.clickLoginButton()

      //cy.url().should('include', 'https://www.enterkomputer.com/')
      Logout.verifyLogin()

      //cy.get('.navigation__content > [href="https://www.enterkomputer.com/myaccount/"] > .ico-profile').click()
      Logout.clickProfil()

      //cy.get('#pills-account-logout').click()
      Logout.clickLogout()
    })
})