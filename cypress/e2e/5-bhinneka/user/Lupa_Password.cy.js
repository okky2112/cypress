describe('Scenario Lupa Password', () => {
    it('TC3.1 - Masukkan email yang sudah terdaftar untuk mendapatkan link reset password', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login user
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Klik link lupa password
        cy.get('.ant-form-item-children > a').click()
        //Klik button "Kirim Email"
        cy.get('.ant-btn').click()
        //Verifikasi kemunculan popup ketika memasukkann email yang sudah terdaftar
        cy.get('#rcDialogTitle0').should('contain', 'Lupa Password')
    })

    it.only('TC3.2 - Masukkan email yang belum terdaftar pada sistem', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login user
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Klik link lupa password
        cy.get('.ant-form-item-children > a').click()
        //Input email yang belum terdaftar
        cy.get('#email').clear().type('invalid')
        //Klik button "Kirim Email"
        cy.get('.ant-btn').click()
        //Verifikasi kemunculan error message ketika memasukkan email yang belum terdaftar
        cy.get('.ant-alert-description').should('contain', 'Email belum terdaftar')
    })
})




// untuk mengimpor objek atau komponen yang disebut "lupaPassword" dari file "lupa_password_page" yang berada dalam direktori "support/pageObjectBhinneka/user"
// import lupaPassword from "../../../support/pageObjectBhinneka/user/Lupa_Password_Page"

// untuk mengimpor data dari file JSON yang disebut "login_user.json" yang terletak dalam direktori "fixtures/bhinneka/user". Data yang diimpor kemudian disimpan dalam variabel usernameInputan.
// const usernameInputan = require('../../../fixtures/bhinneka/user/Login_User.json')

// describe('Test Scenario Lupa Password', () => {
//     const LupaPassword = new lupaPassword
//     beforeEach(() => {
//         //Masuk ke halaman login
//         cy.visit('https://accounts.bhinneka.com/login')
//     })
//     it('TC3.1 - Masukkan email yang sudah terdaftar ', () => {
//         //Input email valid
//         LupaPassword.inputEmail(usernameInputan.emailValid)
//         //Klik button "Selanjutnya"
//         LupaPassword.clickButtonSelanjutnya()
//         //Klik link "Lupa Password"
//         LupaPassword.clickButtonLupaPassword()
//         //Klik button "Kirim Email"
//         LupaPassword.clickButtonKirimEmail()
//         //Verifikasi kemunculan popup ketika memasukkan email yang sudah terdaftar
//         LupaPassword.verifyBerhasil()
//     })

//     it('TC3.2 - Masukkan email yang belum terdaftar', () => {
//         //Input email valid
//         //LupaPassword.inputEmail(usernameInputan.emailValid)
//         //Klik button "Selanjutnya"
//         //LupaPassword.clickButtonSelanjutnya()
//         //Klik link "Lupa Password"
//         //LupaPassword.clickButtonLupaPassword()
//         //Input email tidak valid
//         //LupaPassword.inputEmailSalah(usernameInputan.emailBelumTerdaftar)
//         //cy.get('#email').clear()
//         //Klik button "Kirim Email"
//         //LupaPassword.clickButtonKirimEmail()
//         //Verifikasi kemunculan popup ketika memasukkan email yang belum terdaftar
//         //LupaPassword.verifyFormatEmailSalah()
//     })
// })