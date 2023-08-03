import register from '../../support/pageObject/registerPage'
const registerInputan = require('../../fixtures/register.json')

describe('Test Scenario Register', () => {
    const Register = new register()
    beforeEach(() => {
      cy.visit('/register')
    })
    it('C3 Akun/Email Sudah Digunakan', () => {

      Register.inputUsername(registerInputan.validUsername)

      Register.inputNoHandphone(registerInputan.validNoHandphone)

      Register.inputEmail(registerInputan.validEmail)

      Register.inputPassword(registerInputan.validPassword)

      Register.inputKonfirmasiPassword(registerInputan.validKonfirmasiPassword)

      Register.clickRegisterButton()

      Register.verifyRegisterAkunSudahDigunakan()
    })

    it('C4 No HP tidak boleh kosong', () => {

      Register.inputUsername(registerInputan.validUsername)

      Register.inputEmail(registerInputan.validEmail)

      Register.inputPassword(registerInputan.validPassword)

      Register.inputKonfirmasiPassword(registerInputan.validKonfirmasiPassword)

      Register.clickRegisterButton()

      Register.verifyRegisterNoHPTidakBolehKosong()
    })

    it('C5 Nama Pengguna tidak boleh kosong', () => {

      Register.inputNoHandphone(registerInputan.validNoHandphone)

      Register.inputEmail(registerInputan.validEmail)

      Register.inputPassword(registerInputan.validPassword)
 
      Register.inputKonfirmasiPassword(registerInputan.validKonfirmasiPassword)

      Register.clickRegisterButton()

      Register.verifyRefisterNamaTidakBolehKosong()
    })

    it('C6 Email tidak boleh kosong', () => {
      Register.inputUsername(registerInputan.validUsername)

      Register.inputNoHandphone(registerInputan.validNoHandphone)

      Register.inputPassword(registerInputan.validPassword)

      Register.inputKonfirmasiPassword(registerInputan.validKonfirmasiPassword)

      Register.clickRegisterButton()

      Register.verifyRegisterEmailTidakBolehKosong()
    })

    it('C7 Ulangi Password tidak boleh kosong', () => {
      Register.inputUsername(registerInputan.validUsername)

      Register.inputNoHandphone(registerInputan.validNoHandphone)

      Register.inputEmail(registerInputan.validEmail)

      Register.inputPassword(registerInputan.validPassword)

      Register.clickRegisterButton()

      Register.verifyRegisterUlangiPasswordTidakBolehKosong()
    })

})