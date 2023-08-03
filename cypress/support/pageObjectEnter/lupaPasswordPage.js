class lupaPassword{
    inputUsername(nama){
        //cy.get(':nth-child(3) > .form-control').type(nama)
        cy.ketik(':nth-child(3) > .form-control', nama)
    }
    clickReset(){
        //cy.get('.submit > .ps-btn').click()
        cy.klik('.submit > .ps-btn')
    }
    verifyResetBerhasil(){
        cy.get('.alert > ul > li').should('contain', 'Link reset password anda berhasil terkirim, tolong cek email anda')
    }
    verifyResetEmailTidakDitemukan(){
        cy.get('.alert > ul > li').should('contain', 'Akun/Email tidak ditemukan')
    }
    verifyResetUsernameTidakBolehKosong(){
        cy.get('.alert > ul > li').should('contain', 'Username tidak boleh kosong.')
    }
}
export default lupaPassword
