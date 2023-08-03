describe('Scenario Logout', () => {
    it('Logout Berhasil', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Macanmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Keluar"
        cy.get('.css-1u1cwib > :nth-child(4)').click()
        //memverifikasi bahwa berhasil Logout
        cy.get('h3').should('contain', 'Silakan masuk ke akun Anda')
        //Memverifikasi ketika berhasil logout akan ke halaman url "login" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/')
    })
})