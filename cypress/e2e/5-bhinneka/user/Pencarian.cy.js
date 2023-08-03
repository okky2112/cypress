describe('Scenario Pencarian', () => {
    it('TC3.1 - Mencari produk dengan kata kunci valid', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login user
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login user
        cy.get('#password').type('Macanmp2000+')
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Jeda 4 detik
        cy.wait(4000)
        //Klik "Allow" pada popup Bhinneka
        cy.get('#onesignal-slidedown-allow-button').click()
        //Memasukkan kata kunci "laptop" ke dalam input pencarian
        cy.get('[data-testid="input"]').type('laptop')
        //Klik icon pencarian
        cy.get('.css-obl4w6').click()
        //Verfikasi hasil kata kunci yang dicari
        cy.get('.css-153t8qo').should('have.length.gt', 0)
    })

    it('TC3.2 - Mencari produk dengan kata kunci tidak valid', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login user
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login user
        cy.get('#password').type('Macanmp2000+')
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Jeda 4 detik
        cy.wait(4000)
        //Klik "Allow" pada popup Bhinneka
        cy.get('#onesignal-slidedown-allow-button').click()
        //Memasukkan kata kunci tidak valid ke dalam input pencarian
        cy.get('[data-testid="input"]').type('abcdefghij')
        //Klik icon pencarian
        cy.get('.css-obl4w6').click()
        //Verifikasi hasil kata kunci yang dicari
        cy.get('.css-19l5h8e > h4').should('contain', 'Produk Tidak Ditemukan')
    })

    it('TC3.3 - Mencari produk dengan kata kunci yang mendekati nama produk', () => {
        //Masuk ke halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login user
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik button "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login user
        cy.get('#password').type('Macanmp2000+')
        //Klik button "Masuk"
        cy.get('.ant-form > .ant-btn').click()
        //Verifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Jeda 4 detik
        cy.wait(4000)
        //Klik "Allow" pada popup Bhinneka
        cy.get('#onesignal-slidedown-allow-button').click()
        //Memasukkan kata kunci yang mendekati nama produk ke dalam input pencarian
        cy.get('[data-testid="input"]').type('cang')
        //Klik icon pencarian
        cy.get('.css-obl4w6').click()
        //Verifikasi hasil kata kunci yang dicari
        cy.get('.css-19l5h8e > h4').should('contain', 'Produk Tidak Ditemukan')
    })
})