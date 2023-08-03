describe('Scenario Menambahkan Produk Ke Dalam Keranjang', () => {
    it('TC5.1 - Menambahkan produk ke dalam keranjang dengan berpindah pada halaman keranjang', () => {
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
        //Klik menu "Lainnya"
        cy.get('.css-h4veks > :nth-child(1) > :nth-child(1) > a > .ls-is-cached').click()
        //Klik kategori "Tech and Coms"
        cy.get('.css-u46q6g > .css-lr4l63 > :nth-child(6) > a').click()
        //Klik produk "Samsung Galaxy A04s"
        cy.get('.slick-current > :nth-child(1) > .css-w9k1j9 > [data-testid="product-click"]').click()
        //Klik button "Tambah ke Keranjang"
        cy.get('.css-1t6w53m > :nth-child(1)').click()
        //Klik button "Lanjut ke Keranjang"
        cy.get('.css-1yt4s5m > .css-1ggscc > .css-9vi8jg').click()
        //Verifikasi icon keranjang bertambah jumlahnya menjadi 1
        cy.get('[aria-label="Cart"]').contains('1')
    })

    it('TC5.2 - Menambahkan produk ke dalam keranjang dengan jumlah melebihi batas maksimal', () => {
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
        //Klik menu "Lainnya"
        cy.get('.css-h4veks > :nth-child(1) > :nth-child(1) > a > .ls-is-cached').click()
        //Klik kategori "Tech and Coms"
        cy.get('.css-u46q6g > .css-lr4l63 > :nth-child(6) > a').click()
        //Klik produk "Samsung Galaxy A04s"
        cy.get('.slick-current > :nth-child(1) > .css-w9k1j9 > [data-testid="product-click"]').click()
        //Klik button "Tambah ke Keranjang"
        cy.get('.css-1t6w53m > :nth-child(1)').click()
        //Klik button "Kembali Berbelanja"
        cy.get('.css-1ggscc > .css-1iazn6').click()
        //Menggunakan perulangan untuk mengklik jumlah produk hingga 9 kali
        for (let i = 0; i < 8; i++) {
            cy.get('[data-testid="input-text-plus"]').click()
        }
        //Menginput angka 99 pada kolom jumlah produk
        cy.get('.css-18z11p > [data-testid="input-textbox-quantity"]').type('99')
        //Klik button "Tambahkan ke Keranjang"
        cy.get('.css-1t6w53m').click()
        //Verifikasi kemunculan popup peringatan ketika telah menambahkan produk ke keranjang dengan jumlah melebihi batas maksimal
        cy.get('.css-urzexd > span').should('contain', 'Maaf, stok produk tidak mencukupi')
    })
})