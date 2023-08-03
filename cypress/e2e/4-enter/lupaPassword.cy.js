import lupaPassword from '../../support/pageObject/lupaPasswordPage'
const usernameInputan = require('../../fixtures/login.json')

describe('Tes Scenario Lupa Password', () => {
  const LupaPassword = new lupaPassword()
  beforeEach(() => {
    cy.visit('/forgot_password')
  })
  it('C8 Lupa Password Berhasil', () => {
    LupaPassword.inputUsername(usernameInputan.validNama)

    LupaPassword.clickReset()

    LupaPassword.verifyResetBerhasil()
  })

  it('C9 Akun/Email tidak ditemukan', () => {
    LupaPassword.inputUsername(usernameInputan.salahNama)

    LupaPassword.clickReset()

    LupaPassword.verifyResetEmailTidakDitemukan()
  })

  it('C10 Username tidak boleh kosong', () => {
    //cy.get('.submit > .ps-btn').click()
    LupaPassword.clickReset()
    //cy.get('.alert > ul > li').should('contain', 'Username tidak boleh kosong.')
    LupaPassword.verifyResetUsernameTidakBolehKosong()
  })
})