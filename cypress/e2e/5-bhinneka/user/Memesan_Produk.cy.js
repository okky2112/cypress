describe('Scenario Melakukan Pemesanan Produk', () => {
    it('TC6.1 - Melakukan pemesanan produk', () => {
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
        //Klik button "Beli"
        cy.get('.css-1pvpeap').click()
        //Memberi jeda 5 detik
        cy.wait(5000)
        //Klik dropdown "Jasa Pengiriman"
        cy.get('[data-testid="dropdown-toggle"] > .css-1muzk76 > span').click()
        //Klik opsi JNE Regular Service
        cy.contains('JNE Regular Service').click()
        //Memberi jeda 10 detik
        cy.wait(10000)
        //Klik button "Lanjut Pembayaran"
        cy.get('.css-1cx3h25').click()
        //Memberi jeda 5 detik
        cy.wait(5000)
        //Klik button "Pilih Metode Pembayaran Lain"
        cy.iframe('#paymentIFrame').find('.bt-payment__btn-another-method.false').click()
        //Klik opsi pembayaran "VA BSI"
        cy.iframe('#paymentIFrame').find('.bt-payment__method-image').eq(0).click()
        //Klik button "Bayar" 
        cy.iframe('#paymentIFrame').find('.bt-payment__body').contains('Bayar').click()
        //Verifikasi kemunculan popup no va untuk melakukan pembayaran
        cy.iframe('#paymentIFrame').should('contain', 'Harap Lakukan Pembayaran')
    })

    it.only('TC6.2 - Melakukan pemesanan produk tanpa memilih jasa pengiriman ', () => {
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
        //Klik button "Beli"
        cy.get('.css-1pvpeap').click()
        //Memberi jeda 5 detik
        cy.wait(5000)
        //Klik button "Lanjut Pembayaran"
        cy.get('.css-1cx3h25').click()
    })
})