describe('Scenario Hapus Produk Yang Dipilih Dalam Keranjang', () => {
    it('TC8.1 - Membatalkan penghapusan produk yang dipilih dalam keranjang', () => {
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
        //Klik icon "Tong Sampah" 
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data produk bernomor index 0 dari urutan atas)
        cy.get('.css-1ff2c2b').eq(0).click()
        //Klik opsi button "Batal" 
        cy.get('.css-1ggscc > .css-1iazn6').click()
        //Verifikasi icon keranjang tidak berkurang 
        cy.get('.header-counter').contains('1')
    })
    
    it('TC8.2 - Menghapus produk yang dipilih dalam keranjang', () => {
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
        //Klik icon "Tong Sampah" 
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data produk bernomor index 0 dari urutan atas)
        cy.get('.css-1ff2c2b').eq(0).click()
        //Klik opsi button "Hapus"
        cy.get('.css-1awmzl8').click()
        //Verifikasi icon keranjang berkurang
        cy.get('[aria-label="Cart"] > .css-xp7imb').contains('0')
    })
})