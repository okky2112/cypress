class login{
    inputEmail(email){
        cy.get('#email').type(email)
    }
    inputPassword(pass){
        cy.get('#password').type(pass)
    }
    clickButtonSelanjutnya(){
        cy.get('#next').click()
    }
    clickButtonMasuk(){
        cy.get('.ant-form > .ant-btn').click()
    }
    verifyLoginBerhasil(){
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    }
    verifyFailedEmailBelumTerdaftar(){
        cy.get('.ant-alert-description').should('contain', 'Email belum terdaftar')
    }
    verifyFailedEmailHarusDiisi(){
        cy.get('.ant-form-explain').should('contain', 'Email harus diisi')
    }
    verifyFailedMasukkanKataSandi(){
        cy.get('.ant-form-explain').should('contain', 'Masukkan kata sandi')
    }
    verifyFailedKataSandiSalah(){
        cy.get('.ant-alert-description').should('contain', 'Login error! Kata sandi salah')
    }
}

export default login