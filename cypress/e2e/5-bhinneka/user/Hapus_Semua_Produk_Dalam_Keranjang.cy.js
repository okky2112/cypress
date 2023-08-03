describe('Scenario Hapus Semua Produk Dalam Keranjang', () => {
    it('TC9.1 - Membatalkan penghapusan semua produk dalam keranjang', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
        //Input Email
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Input Password
        cy.get('#password').type('Macanmp2000+')
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Keranjang"
        cy.get('[aria-label="Cart"]').click()
        //Klik button "Hapus" 
        cy.get('.css-1q5wn6b').click()
        //Klik opsi button "Batal"
        cy.get('.css-1ggscc > .css-1iazn6').click()
        //Verifikasi icon keranjang tidak berkurang 
        cy.get('.header-counter').contains('2')
    })

    it('TC9.2 - Menghapus semua produk dalam keranjang', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/login')
        //Input Email
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Input Password
        cy.get('#password').type('Macanmp2000+')
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Keranjang"
        cy.get('[aria-label="Cart"]').click()
        //Klik button "Hapus" 
        cy.get('.css-1q5wn6b').click()
        //Klik opsi button "Hapus"
        cy.get('.css-1awmzl8').click()
        //Verifikasi icon keranjang berkurang
        cy.get('[aria-label="Cart"] > .css-xp7imb').contains('0')   
    })
})
