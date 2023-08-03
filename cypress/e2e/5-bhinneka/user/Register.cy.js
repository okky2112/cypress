describe('Scenario Register', () => {
  it('TC1.1 - Melakukan register dengan data yang valid', () => {
      //Masuk ke halaman register user
      cy.visit('https://accounts.bhinneka.com/register')
      //Klik button "Pembeli"
      cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
      //Klik button "Selanjutnya"
      cy.get('.ant-btn').click()
      //Input nama depan valid
      cy.get('#firstName').type('Farhan')
      //Input nama belakang valid
      cy.get('#lastName').type('Dwima')
      //Input email valid
      cy.get('#email').type('qadummy2001@gmail.com')
      //Input no hp valid
      cy.get('#phone').type('081219013492')
      //Input password valid
      cy.get('#password').type('Qadummy2000+')
      //Klik button "Register"
      cy.get('.ant-form > .steps-action > .ant-btn').click()
  })

  it('TC1.2 - Melakukan register dengan nama depan dikosongkan', () => {
    //Masuk ke halaman register user
    cy.visit('https://accounts.bhinneka.com/register')
    //Klik button "Pembeli"
    cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
    //Klik button "Selanjutnya"
    cy.get('.ant-btn').click()
    //Input nama belakang valid
    cy.get('#lastName').type('Dwima')
    //Input email valid
    cy.get('#email').type('qadummy2001@gmail.com')
    //Input no hp valid
    cy.get('#phone').type('081219013492')
    //Input password valid
    cy.get('#password').type('Qadummy2000+')
    //Klik button "Register"
    cy.get('.ant-form > .steps-action > .ant-btn').click()
    //Verifikasi kemunculan error message ketika nama depan dikosongkan
    cy.get('.ant-form-explain').should('contain', 'Nama Depan harus diisi.')
  })

  it('TC1.3 - Melakukan register dengan email dikosongkan', () => {
    //Masuk ke halaman register user
    cy.visit('https://accounts.bhinneka.com/register')
    //Klik button "Pembeli"
    cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
    //Klik button "Selanjutnya"
    cy.get('.ant-btn').click()
    //Input nama depan valid
    cy.get('#firstName').type('Farhan')
    //Input nama belakang valid
    cy.get('#lastName').type('Dwima')
    //Input no hp valid
    cy.get('#phone').type('081219013492')
    //Input password valid
    cy.get('#password').type('Qadummy2000+')
    //Klik button "Register"
    cy.get('.ant-form > .steps-action > .ant-btn').click()
    //Verifikasi kemunculan error message ketika email dikosongkan
    cy.get('.ant-form-explain').should('contain', 'Email harus diisi.')
  })

  it('TC1.4 - Melakukan register dengan email tidak valid', () => {
    //Masuk ke halaman register user
    cy.visit('https://accounts.bhinneka.com/register')
    //Klik button "Pembeli"
    cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
    //Klik button "Selanjutnya"
    cy.get('.ant-btn').click()
    //Input nama depan valid
    cy.get('#firstName').type('Farhan')
    //Input nama belakang valid
    cy.get('#lastName').type('Dwima')
    //Input email tidak valid
    cy.get('#email').type('ngasal')
    //Input no hp valid
    cy.get('#phone').type('081219013492')
    //Input password valid
    cy.get('#password').type('Qadummy2000+')
    //Klik button "Register"
    cy.get('.ant-form > .steps-action > .ant-btn').click()
    //Verifikasi kemunculan error message ketika email tidak valid
    cy.get('.ant-form-explain').should('contain', 'Format email salah.')
  })

  it('TC1.5 - Melakukan register dengan no ponsel dikosongkan', () => {
    //Masuk ke halaman register user
    cy.visit('https://accounts.bhinneka.com/register')
    //Klik button "Pembeli"
    cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
    //Klik button "Selanjutnya"
    cy.get('.ant-btn').click()
    //Input nama depan valid
    cy.get('#firstName').type('Farhan')
    //Input nama belakang valid
    cy.get('#lastName').type('Dwima')
    //Input email valid
    cy.get('#email').type('qadummy2001@gmail.com')
    //Input password valid
    cy.get('#password').type('Qadummy2000+')
    //Klik button "Register"
    cy.get('.ant-form > .steps-action > .ant-btn').click()
    //Verifikasi kemunculan error message ketika no ponsel dikosongkan
    cy.get('.ant-form-explain').should('contain', 'Nomor Handphone harus diisi.')
  })

  it('TC1.6 - Melakukan register dengan password dikosongkan', () => {
    //Masuk ke halaman register user
    cy.visit('https://accounts.bhinneka.com/register')
    //Klik button "Pembeli"
    cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
    //Klik button "Selanjutnya"
    cy.get('.ant-btn').click()
    //Input nama depan valid
    cy.get('#firstName').type('Farhan')
    //Input nama belakang valid
    cy.get('#lastName').type('Dwima')
    //Input email valid
    cy.get('#email').type('qadummy2001@gmail.com')
    //Input no hp valid
    cy.get('#phone').type('081219013492')
    //Klik button "Register"
    cy.get('.ant-form > .steps-action > .ant-btn').click()
    //Verifikasi kemunculan error message ketika password dikosongkan
    cy.get('.ant-form-explain').should('contain', 'Password harus diisi. Password harus mengandung minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter simbol')
  })

  it.only('TC1.7 - Melakukan register dengan memasukkan data yang sudah pernah terdaftar', () => {
    //Masuk ke halaman register user
    cy.visit('https://accounts.bhinneka.com/register')
    //Klik button "Pembeli"
    cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
    //Klik button "Selanjutnya"
    cy.get('.ant-btn').click()
    //Input nama depan yang telah terdaftar
    cy.get('#firstName').type('Muhammad Okky')
    //Input nama belakang yang telah terdaftar
    cy.get('#lastName').type('Irawan')
    //Input email yang telah terdaftar
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Input no hp yang telah terdaftar
    cy.get('#phone').type('081994114234')
    //Input password yang telah terdaftar
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Register"
    cy.get('.ant-form > .steps-action > .ant-btn').click()
    //Verifikasi kemunculan error message ketika memasukkan data yang sudah terdaftar"
  })
})























//untuk mengimpor objek atau komponen yang disebut "register" dari file "register_page_user" yang berada dalam direktori "support/pageObjectBhinneka/user"
//import register from '../../../support/pageObjectBhinneka/user/Register_Page_User'

//untuk mengimpor data dari file JSON yang disebut "register_user.json" yang terletak dalam direktori "fixtures/bhinneka/user". Data yang diimpor kemudian disimpan dalam variabel registerInputan.
//const registerInputan = require('../../../fixtures/bhinneka/user/Register_User.json')

//describe('Test Scenario Register', () => {
  //const Register = new register
  //beforeEach(() => {
    //Masuk ke halaman register user
    //cy.visit('https://accounts.bhinneka.com/register')
  //})
  //it('TC1.1 - Melakukan register dengan data yang valid', () => {
    //Klik button "Pembeli"
    //Register.clickButtonPembeli()
    //Klik button "Selanjutnya"
    //Register.clickButtonSelanjutnya()
    //Input nama depan valid
    //Register.inputNamaDepan(registerInputan.namaDepanValid)
    //Input Nama Belakang valid
    //Register.inputNamaBelakang(registerInputan.namaBelakangValid)
    //Input Email valid
    //Register.inputEmail(registerInputan.emailValid)
    //Input No HP valid
    //Register.inputNoHP(registerInputan.noHPValid)
    //Input password valid
    //Register.inputPassword(registerInputan.passwordValid)
    //Klik button "Register"
    //Register.clickButtonRegister()
    
  //})

  //it('TC1.2 - Melakukan register dengan nama depan dikosongkan', () => {
    //Klik button "Pembeli"
    //Register.clickButtonPembeli()
    //Klik button "Selanjutnya"
    //Register.clickButtonSelanjutnya()
    //Input nama belakang valid
    //Register.inputNamaBelakang(registerInputan.namaBelakangValid)
    //Input email valid
    //Register.inputEmail(registerInputan.emailValid)
    //Input no hp valid
    //Register.inputNoHP(registerInputan.noHPValid)
    //Input password valid
    //Register.inputPassword(registerInputan.passwordValid)
    //Klik button "Register" 
    //Register.clickButtonRegister()
    //Verifikasi kemunculan error message ketika nama depan dikosongkan
    //Register.verifyFailedNamaDepanHarusDiisi()
  //})

  //it.only('TC1.3 - Melakukan register dengan email dikosongkan', () => {
    //Klik button "Pembeli"
    //Register.clickButtonPembeli()
    //Klik button "Selanjutnya"
    //Register.clickButtonSelanjutnya()
    //Input nama depan valid
    //Register.inputNamaDepan(registerInputan.namaDepanValid)
    //Input nama belakang valid
    //Register.inputNamaBelakang(registerInputan.namaBelakangValid)
    //Input no hp valid
    //Register.inputNoHP(registerInputan.noHPValid)
    //Input password valid 
    //Register.inputPassword(registerInputan.passwordValid)
    //Klik button "Register"
    //Register.clickButtonRegister()
    //Verifikasi kemunculan error message ketika email dikosongkan
    //Register.verifyFailedEmailHarusDiisi
  //})

  //it('TC1.4 - Melakukan register dengan email tidak valid', () => {
    //Klik button "Pembeli"
    //Register.clickButtonPembeli()
    //Klik button "Selanjutnya"
    //Register.clickButtonSelanjutnya()
    //Input nama depan valid
    //Register.inputNamaDepan(registerInputan.namaDepanValid)
    //Input nama belakang valid
    //Register.inputNamaBelakang(registerInputan.namaBelakangValid)
    //Input email tidak valid
    //Register.inputEmail(registerInputan.emailTidakValid)
    //Input no hp valid 
    //Register.inputNoHP(registerInputan.noHPValid)
    //Input password valid
    //Register.inputPassword(registerInputan.passwordValid)
    //Klik button "Register"
    //Register.clickButtonRegister()
    //Verifikasi kemunculan error messsage ketika email tidak valid
    //Register.verifyFailedFormatEmailSalah()
  //})

  // //it('TC1.5 - Melakukan register dengan no ponsel dikosongkan', () => {
  //   //Klik button "Pembeli"
  //   Register.clickButtonPembeli()
  //   //Klik button "Selanjutnya"
  //   Register.clickButtonSelanjutnya()
  //   //Input nama depan valid
  //   Register.inputNamaDepan(registerInputan.namaDepanValid)
  //   //Input nama belakang valid
  //   Register.inputNamaBelakang(registerInputan.namaBelakangValid)
  //   //Input email valid
  //   Register.inputEmail(registerInputan.emailValid)
  //   //Input password valid
  //   Register.inputPassword(registerInputan.passwordValid)
  //   //Klik button "Register"
  //   Register.clickButtonRegister()
  //   //Verifikasi kemunculan error message ketika no ponsel dikosongkan
  //   Register.verifyFailedNoHandphoneHarusDiisi()
  // })

  // it('TC1.6 - Melakukan register dengan password dikosongkan', () => {
  //   //Klik button "Pembeli"
  //   Register.clickButtonPembeli()
  //   //Klik button "Selanjutnya"
  //   Register.clickButtonSelanjutnya()
  //   //Input nama depan valid
  //   Register.inputNamaDepan(registerInputan.namaDepanValid)
  //   //Input nama belakang valid
  //   Register.inputNamaBelakang(registerInputan.namaBelakangValid)
  //   //Input email valid
  //   Register.inputEmail(registerInputan.emailValid)
  //   //Input no hp valid
  //   Register.inputNoHP(registerInputan.noHPValid)
  //   //Klik button "Register"
  //   Register.clickButtonRegister()
  //   //Verifikasi kemunculan error message ketika password dikosongkan
  //   Register.verifyFailedPasswordHarusDiisi()
  // })

//   it('TC1.7 - Melakukan register dengan memasukkan data yang sudah pernah terdaftar)', () => {
//     //Klik button "Pembeli"
//     Register.clickButtonPembeli()
//     //Klik button "Selanjutnya"
//     Register.clickButtonSelanjutnya()
//     //Input nama depan yang telah terdaftar
//     Register.inputNamaDepan(registerInputan.namaDepanTelahTerdaftar)
//     //Input nama belakang yang telah terdaftar
//     Register.inputNamaBelakang(registerInputan.namaBelakangTelahTerdaftar)
//     //Input email yang telah terdaftar
//     Register.inputEmail(registerInputan.emailTelahTerdaftar)
//     //Input no hp yang telah terdaftar
//     Register.inputNoHP(registerInputan.noHPTelahTerdaftar)
//     //Input password yang telah terdaftar
//     Register.inputPassword(registerInputan.passwordTelahTerdaftar)
//     //Klik button "Register"
//     Register.clickButtonRegister()
//     //Verifikasi kemunculan error message ketika memasukkan data yang sudah terdaftar "
//     Register.verifyFailedPendaftaranGagal()
//   })
// })