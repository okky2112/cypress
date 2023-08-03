//untuk mengimpor objek atau komponen yang disebut "login" dari file "login_page_user" yang berada dalam direktori "support/pageObjectBhinneka/user"
import login from '../../../support/pageObjectBhinneka/seller/login_page_seller'

//untuk mengimpor data dari file JSON yang disebut "login_seller.json" yang terletak dalam direktori "fixtures/bhinneka/seller". Data yang diimpor kemudian disimpan dalam variabel loginInputan.
const loginInputan = require('../../../fixtures/bhinneka/seller/login_seller.json')
describe('Test Scenario Login', () => {
    const Login = new login
    beforeEach(() => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
    })
    it.only('Login Berhasil', () => {
        //Input Email
        Login.inputEmail(loginInputan.validEmail)
        //Klik button "Selanjutnya"
        Login.clickButtonSelanjutnya()
        //Input Password
        Login.inputPassword(loginInputan.pass)
        //Klik button "Masuk"
        Login.clickButtonMasuk()
        //Memverifikasi bahwa Login Berhasil
        Login.verifyLoginBerhasil()
    })

    it('Error Message Login - Email Belum Terdaftar', () => {
        //Input Email salah
        Login.inputEmail(loginInputan.salahEmail)
        //Klik button "Selanjutnya"
        Login.clickButtonSelanjutnya()
        //Memverifikas bahwa Email belum terdaftar
        Login.verifyFailedEmailBelumTerdaftar
    })

    it('Error Message Login - Email Harus Diisi', () => {
        //Klik button "Selanjutnya"
        Login.clickButtonSelanjutnya()
        //Memverifikasi bahwa Email harus diisi
        Login.verifyFailedEmailHarusDiisi()
    })

    it('Error Message Login - Masukkan Kata Sandi', () => {
        //Input Email
        Login.inputEmail(loginInputan.validEmail)
        //Klik button "Selanjutnya"
        Login.clickButtonSelanjutnya()
        //Klik button "Masuk"
        Login.clickButtonMasuk()
        //Memverifikasi bahwa "Masukkan kata sandi"
        Login.verifyFailedMasukkanKataSandi()
    })

    it('Error Message Login - Kata Sandi Salah', () => {
        //Input Email
        Login.inputEmail(loginInputan.validEmail)
        //Klik button "Selanjutnya"
        Login.clickButtonSelanjutnya()
        //Input Password salah
        Login.inputPassword(loginInputan.salahPass)
        //Klik button "Masuk"
        Login.clickButtonMasuk()
        //Memverifikasi bahwa Kata sandi salah
        Login.verifyFailedKataSandiSalah()
    })
})