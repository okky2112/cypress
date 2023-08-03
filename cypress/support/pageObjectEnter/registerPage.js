class register{
    inputUsername(nama){
        //cy.get(':nth-child(3) > .form-control').type(nama)
        cy.ketik(':nth-child(3) > .form-control', nama)
    }
    inputNoHandphone(no){
        //cy.get(':nth-child(4) > .form-control').type(no)
        cy.ketik(':nth-child(4) > .form-control', no)
    }
    inputEmail(email){
        //cy.get(':nth-child(5) > .form-control').type(email)
        cy.ketik(':nth-child(5) > .form-control', email)
    }
    inputPassword(pass){
        //cy.get(':nth-child(6) > .form-control').type(pass)
        cy.ketik(':nth-child(6) > .form-control', pass)
    }
    inputKonfirmasiPassword(konfirpass){
        //cy.get(':nth-child(7) > .form-control').type(konfirpass)
        cy.ketik(':nth-child(7) > .form-control', konfirpass)
    }
    clickRegisterButton(){
        //cy.get('.submtit > .ps-btn').click()
        cy.klik('.submtit > .ps-btn')
    }
    verifyRegisterAkunSudahDigunakan(){
        cy.get('.alert > ul > li').should('contain', 'Akun/No Telepon sudah digunakan')
    }
    verifyRegisterNoHPTidakBolehKosong(){
        cy.get('.alert > ul > li').should('contain', 'No HP tidak boleh kosong.')
    }
    verifyRefisterNamaTidakBolehKosong(){
        cy.get('.alert > ul > li').should('contain', 'Nama Pengguna tidak boleh kosong.')
    }
    verifyRegisterEmailTidakBolehKosong(){
        cy.get('.alert > ul > li').should('contain', 'Email tidak boleh kosong.')
    }
    verifyRegisterUlangiPasswordTidakBolehKosong(){
        cy.get('.alert > ul > li').should('contain', 'Ulangi Password tidak boleh kosong.')
    }
}
export default register