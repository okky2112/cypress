describe('Scenario Edit Produk', () => {
    it.only('Edit Produk Berhasil', () => {
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
        //Klik icon "Edit"
        cy.get(':nth-child(1) > :nth-child(7) > .column-right > :nth-child(1) > .css-1m2itk5 > .css-1wygiqv').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Edit" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/product/edit')
        //Hapus data sebelumnya lalu update dengan menambahkan 300000 pada Harga Awal
        cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').clear().type('300000')
        //Klik "Simpan Produk"
        cy.get('.css-1xosbdh > .css-9vi8jg').click()
        //Memverifikasi ketika sudah update data maka akan memunculkan popup dengan keterangan "Ubah Produk Berhasil"
        cy.get('.Toastify__toast-body > p').should('contain', 'Ubah Produk Berhasil')
    })
})