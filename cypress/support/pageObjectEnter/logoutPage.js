class logout{
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
    clickProfil(){
        //cy.get('.navigation__content > [href="https://www.enterkomputer.com/myaccount/"] > .ico-profile').click()
        cy.klik('.navigation__content > [href="https://www.enterkomputer.com/myaccount/"] > .ico-profile')
    }
    clickLogout(){
        //cy.get('#pills-account-logout').click()
        cy.klik('#pills-account-logout')
    }
}
export default logout