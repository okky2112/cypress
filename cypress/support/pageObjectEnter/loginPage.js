class login{
    inputUsername(nama){
        //cy.get(':nth-child(3) > .form-control').type(nama)
        cy.ketik(':nth-child(3) > .form-control', nama)
    }
    inputPassword(pass){
        //cy.get('.form-forgot > .form-control').type(pass)
        cy.ketik('.form-forgot > .form-control', pass)
    }
    clickLoginButton(){
        //cy.get('.submit > .ps-btn').click()
        cy.klik('.submit > .ps-btn')
    }
    verifyLogin(){
        cy.url().should('include', 'https://www.enterkomputer.com/')
    }
    verifyFailedLogin(){
        cy.get('.alert > ul > li').should('contain', 'Akun/Email tidak ditemukan')
    }

}
export default login