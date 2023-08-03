class register{
    clickButtonPembeli(){
        cy.get(':nth-child(2) > .ant-card > .ant-card-body').click()
    }
    clickButtonSelanjutnya(){
        cy.get('.ant-btn').click()
    }
    inputNamaDepan(namadepan){
        cy.get('#firstName').type(namadepan)
    }
    inputNamaBelakang(namabelakang){
        cy.get('#lastName').type(namabelakang)
    }
    inputEmail(email){
        cy.get('#email').type(email)
    }
    inputNoHP(HP){
        cy.get('#phone').type(HP)
    }
    inputPassword(pass){
        cy.get('#password').type(pass)
    }
    clickButtonRegister(){
        cy.get('.ant-form > .steps-action > .ant-btn').click()
    }
    verifyFailedPendaftaranGagal(){
        cy.get('.ant-alert-message').should('contain', 'Pendaftaran Gagal')
    }
    verifyFailedNamaDepanHarusDiisi(){
        cy.get('.ant-form-explain').should('contain', 'Nama Depan harus diisi.')
    }
    verifyFailedEmailHarusDiisi(){
        cy.get('.ant-form-explain').should('contain', 'Email harus diisi.')
    }
    verifyFailedFormatEmailSalah(){
        cy.get('.ant-form-explain').should('contain', 'Format email salah.')
    }
    verifyFailedNoHandphoneHarusDiisi(){
        cy.get('.ant-form-explain').should('contain', 'Nomor Handphone harus diisi.')
    }
    verifyFailedPasswordHarusDiisi(){
        cy.get('.ant-form-explain').should('contain', 'Password harus diisi. Password harus mengandung minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter simbol')
    }
}
export default register