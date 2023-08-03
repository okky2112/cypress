describe('Scenario Hapus Produk', () => {
    it('Hapus Produk Berhasil', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('kucingmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Kucingmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Seller"
        cy.get('.menu-dekstop > .css-xp7imb').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/')
        //Klik Navigasi "Daftar Produk"
        cy.get(':nth-child(3) > a > .css-12gidp5').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/productlist')
        //Klik button "Hapus"
        cy.get(':nth-child(1) > :nth-child(7) > .column-right > :nth-child(2) > .css-1m2itk5').click()
        //pada command "eq" menyesuaikan nomor indeks yang dipilih (elemen "Hapus" berada di index 1 dari urutan atas)
        cy.get('.css-1awmzl8').eq(1).click()
    })
})