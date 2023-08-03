describe('Scenario Login', () => {
    it('TC2.1 - Melakukan login dengan data yang valid di halaman login', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
        //Input email valid
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Input Password valid
        cy.get('#password').type('Macanmp2000+')
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    })

    it('TC2.2 - Melakukan login dengan email belum terdaftar', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
        //Input email tidak valid
        cy.get('#email').type('gajah@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Verifikasi kemunculan error message ketika login dengan email belum terdaftar
        cy.get('.ant-alert-description').should('contain', 'Email belum terdaftar')
    })

    it('TC2.3 - Melakukan login dengan email dikosongkan', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Verifikasi kemunculan error message ketika email dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Email harus diisi')
    })

    it('TC2.4 - Melakukan login dengan password dikosongkan', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
        //Input email valid
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi kemunculan error message ketika password dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Masukkan kata sandi')
    })

    it('TC2.5 - Melakukan login dengan password tidak valid', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
        //Input email valid
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Input password tidak valid
        cy.get('#password').type('Macanmp')
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi kemunculan error message ketika password tidak valid
        cy.get('.ant-alert-description').should('contain', 'Login error! Kata sandi salah')
    })
})






























//untuk mengimpor objek atau komponen yang disebut "login" dari file "login_page_user" yang berada dalam direktori "support/pageObjectBhinneka/user"
//import login from '../../../support/pageObjectBhinneka/user/Login_Page_User'

//untuk mengimpor data dari file JSON yang disebut "login_user.json" yang terletak dalam direktori "fixtures/bhinneka/user". Data yang diimpor kemudian disimpan dalam variabel loginInputan.
//const loginInputan = require('../../../fixtures/bhinneka/user/Login_User.json')
//describe('Test Scenario Login', () => {
    //const Login = new login
    //beforeEach(() => {
        //Masuk ke halaman login
        //cy.visit('https://accounts.bhinneka.com/login')
    //})
    //it('TC2.1 - Melakukan login dengan data yang valid di halaman login', () => {
        //Input email valid
        //Login.inputEmail(loginInputan.emailValid)
        //Klik button "Selanjutnya"
        //Login.clickButtonSelanjutnya()
        //Input password valid
        //Login.inputPassword(loginInputan.passwordValid)
        //Klik button "Masuk"
        //Login.clickButtonMasuk()
        //Verifikasi ketika berhasil login akan masuk ke halaman home
        //Login.verifyLoginBerhasil()
    //})

    //it('TC2.2 - Melakukan login dengan email belum terdaftar', () => {
        //Input email tidak valid
        //Login.inputEmail(loginInputan.emailTidakValid)
        //Klik button "Selanjutnya"
        //Login.clickButtonSelanjutnya()
        //Verifikasi kemunculan error message ketika login dengan email belum terdaftar
        //Login.verifyFailedEmailBelumTerdaftar
    //})

    //it('TC2.3 - Melakukan login dengan email dikosongkan', () => {
        //Klik button "Selanjutnya"
        //Login.clickButtonSelanjutnya()
        //Verifikasi kemunculan error message ketika email dikosongkan
        //Login.verifyFailedEmailHarusDiisi()
    //})

    //it('TC2.4 - Melakukan login dengan password dikosongkan', () => {
        //Input email valid
        //Login.inputEmail(loginInputan.emailValid)
        //Klik button "Selanjutnya"
        //Login.clickButtonSelanjutnya()
        //Klik button "Masuk"
        //Login.clickButtonMasuk()
        //Verifikasi kemunculan error message ketika password dikosongkan
        //Login.verifyFailedMasukkanKataSandi()
    //})

    //it('TC2.5 - Melakukan login dengan password tidak valid', () => {
        //Input email valid
        //Login.inputEmail(loginInputan.emailValid)
        //Klik button "Selanjutnya"
        //Login.clickButtonSelanjutnya()
        //Input password tidak valid
        //Login.inputPassword(loginInputan.passwordTidakValid)
        //Klik button "Masuk"
        //Login.clickButtonMasuk()
        //Verifikasi kemunculan error message ketika password tidak valid
        //Login.verifyFailedKataSandiSalah()
    //})
//})