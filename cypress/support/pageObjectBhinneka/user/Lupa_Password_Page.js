class lupaPassword{
    inputEmail(email){
        cy.get('#email').type(email)
    }
    inputEmailSalah(salah){
        cy.get('#email').type(salah)
    }
    clickButtonSelanjutnya(){
        cy.get('#next').click()
    }
    clickButtonLupaPassword(){
        cy.get('.ant-form-item-children > a').click()
    }
    clickButtonKirimEmail(){
        cy.get('.ant-btn').click()
    }
    verifyBerhasil(){
        cy.get('#rcDialogTitle0').should('contain', 'Lupa Password')
    }
    verifyFormatEmailSalah(){
        cy.get('.ant-form-explain').should('contain', 'Format email salah')
    }
}
export default lupaPassword