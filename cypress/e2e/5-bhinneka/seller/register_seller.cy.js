//untuk mengimpor objek atau komponen yang disebut "register" dari file "register_page_seller" yang berada dalam direktori "support/pageObjectBhinneka/seller"
import register from '../../../support/pageObjectBhinneka/seller/register_page_seller'

//untuk mengimpor data dari file JSON yang disebut "register_seller.json" yang terletak dalam direktori "fixtures/bhinneka/seller". Data yang diimpor kemudian disimpan dalam variabel registerInputan.
const registerInputan = require('../../../fixtures/bhinneka/seller/register_seller.json')

describe('Test Scenario Register Seller', () => {
    const Register = new register
    beforeEach(() => {
        //Masuk ke halaman register seller
        cy.visit('https://accounts.bhinneka.com/register')
    })
    it('Error Message Register Seller - Pendaftaran Gagal', () => {
        //Klik button seller
        Register.clickButtonSeller()
        //Klik button "Selanjutnya"
        Register.clickButtonSelanjutnya()
        //Input Nama Depan
        Register.inputNamaDepan(registerInputan.namaDepan)
        //Input Nama Belakang
        Register.inputNamaBelakang(registerInputan.namaBelakang)
        //Input Email
        Register.inputEmail(registerInputan.validEmail)
        //Input No HP
        Register.inputNoHP(registerInputan.noHP)
        //Input password
        Register.inputPassword(registerInputan.pass)
        //Klik button "Register"
        Register.clickButtonRegister()
        //Memverifikasi bahwa "Pendaftaran Gagal"
        Register.verifyPendaftaranGagal()
    })

    it('Error Message Register Seller - Nama Depan Harus Diisi', () => {
        //Klik button seller
        Register.clickButtonSeller()
        //Klik button "Selanjutnya"
        Register.clickButtonSelanjutnya()
        //Input Nama Belakang
        Register.inputNamaBelakang(registerInputan.namaBelakang)
        //Input Email
        Register.inputEmail(registerInputan.validEmail)
        //Input No HP
        Register.inputNoHP(registerInputan.noHP)
        //Input password
        Register.inputPassword(registerInputan.pass)
        //Klik button "Register"
        Register.clickButtonRegister()
        //Memverifikasi bahwa "Nama Depan harus Diisi"
        Register.verifyFailedNamaDepanHarusDiisi()
    })

    it('Error Message Register Seller - Email Harus Diisi', () => {
        //Klik button seller
        Register.clickButtonSeller()
        //Klik button "Selanjutnya"
        Register.clickButtonSelanjutnya()
        //Input Nama Depan
        Register.inputNamaDepan(registerInputan.namaDepan)
        //Input Nama Belakang
        Register.inputNamaBelakang(registerInputan.namaBelakang)
        //Input No HP
        Register.inputNoHP(registerInputan.noHP)
        //Input password
        Register.inputPassword(registerInputan.pass)
        //Klik button "Register"
        Register.clickButtonRegister()
        //Memverifikasi bahwa "Email harus diisi"
        Register.verifyFailedEmailHarusDiisi
    })

    it('Error Message Register Seller - Format Email Salah', () => {
        //Klik button seller
        Register.clickButtonSeller()
        //Klik button "Selanjutnya"
        Register.clickButtonSelanjutnya()
        //Input Nama Depan 
        Register.inputNamaDepan(registerInputan.namaDepan)
        //Input Nama Belakang
        Register.inputNamaBelakang(registerInputan.namaBelakang)
        //Input Email salah
        Register.inputEmail(registerInputan.salahEmail)
        //Input No HP
        Register.inputNoHP(registerInputan.noHP)
        //Input password
        Register.inputPassword(registerInputan.pass)
        //Klik button "Register"
        Register.clickButtonRegister()
        //Memverifikasi bahwa "Format email salah"
        Register.verifyFailedFormatEmailSalah()
    })

    it('Error Message Register Seller - Nomor Handphone Harus Diisi', () => {
        //Klik button seller
        Register.clickButtonSeller()
        //Klik button "Selanjutnya"
        Register.clickButtonSelanjutnya()
        //Input Nama Depan
        Register.inputNamaDepan(registerInputan.namaDepan)
        //Input Nama Belakang
        Register.inputNamaBelakang(registerInputan.namaBelakang)
        //Input Email
        Register.inputEmail(registerInputan.validEmail)
        //Input password
        Register.inputPassword(registerInputan.pass)
        //Klik button "Register"
        Register.clickButtonRegister()
        //Memverifikasi bahwa "Nomor Handphone harus diisi"
        Register.verifyFailedNoHandphoneHarusDiisi()
    })

    it('Error Message Register Seller - Password Harus Diisi', () => {
        //Klik button seller
        Register.clickButtonSeller()
        //Klik button "Selanjutnya"
        Register.clickButtonSelanjutnya()
        //Input Nama Depan
        Register.inputNamaDepan(registerInputan.namaDepan)
        //Input Nama Belakang
        Register.inputNamaBelakang(registerInputan.namaBelakang)
        //Input Email
        Register.inputEmail(registerInputan.validEmail)
        //Input No HP
        Register.inputNoHP(registerInputan.noHP)
        //Klik button "Register"
        Register.clickButtonRegister()
        //Memverifikasi bahwa "Password harus diisi"
        Register.verifyFailedPasswordHarusDiisi
    })

})