describe('Scenario Melihat Detail Produk', () => {
    it('TC4.1 - Melihat detail gambar produk ', () => {
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
        //Klik gambar produk dan verifikasi gambar produk berhasil muncul
        cy.get('[alt="Product image medium 0"]').click()
    })

    it('TC4.2 - Melihat informasi detail produk', () => {
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
        //Memverifikasi informasi berdasarkan konten "Harga"
        cy.get(':nth-child(4) > label').should('contain', 'Harga')
        //Memverifikasi informasi berdasarkan konten "Cicilan"
        cy.get(':nth-child(5) > label').should('contain', 'Cicilan')
        //Memverifikasi informasi berdsarkan konten "Estimasi"
        cy.get(':nth-child(6) > label').should('contain', 'Estimasi')
        //Memverifikasi informasi berdasarkan konten "Jumlah"
        cy.get(':nth-child(9) > label').should('contain', 'Jumlah')
        //Memverifikasi informasi berdasarkan konten "Informasi Toko"
        cy.get('.bt-merchant-info > label').should('contain', 'Informasi Toko')
        //Memverifikasi informasi berdasarkan konten "Deskripsi"
        cy.get('.css-1novp5a > a').should('contain', 'Deskripsi ')        
    })
})