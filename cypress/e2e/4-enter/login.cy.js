import login from '../../support/pageObjectEnter/loginPage'
const loginInputan = require('../../fixtures/login.json')

describe('Test Scenario Login', () => {
  const Login = new login()
  beforeEach(() => {
    cy.visit('/login')
  })
  it('C1 Login Berhasil', () => {
    Login.inputUsername(loginInputan.validNama)

    Login.inputPassword(loginInputan.pass)

    Login.clickLoginButton()

    Login.verifyLogin()
  })

  it('C2 Login Gagal', () => {
    Login.inputUsername(loginInputan.salahNama)

    Login.inputPassword(loginInputan.salahPass)

    Login.clickLoginButton()

    Login.verifyFailedLogin()
  })
})