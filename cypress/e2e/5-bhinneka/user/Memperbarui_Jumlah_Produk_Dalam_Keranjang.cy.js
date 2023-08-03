describe('Scenario Memperbarui Jumlah Produk Dalam Keranjang', () => {
    it('TC7.1 - Menambah jumlah produk dalam keranjang', () => {
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
        //Klik icon + sebanyak 1 kali untuk menambah jumlah produk menjadi 2 buah
        //Menyesuaikan kebutuhan, disini mencontohkan menambah sebanyak 1 kali dari produk yang sudah memiliki 1 buah
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data produk bernomor index 0 dari urutan atas)
        cy.get('[data-testid="input-text-plus"]').eq(0).click()
        //Jeda 5 detik
        cy.wait(5000)
        //Memverifikasi icon keranjang bertambah jumlah menjadi 2
        //Menyesuaikan kebutuhan, bahwa verifikasi berdasarkan jumlah produk di icon keranjang sebanyak 2 buah 
        cy.get('.header-counter').should('contain', '2')
        

    })

    it('TC7.2 - Mengurangi jumlah produk dalam keranjang', () => {
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
        //Klik icon - sebanyak 1 kali untuk mengurangi jumlah produk menjadi 1 buah
        //Menyesuaikan kebutuhan, disini mencontohkan mengurangi sebanyak 1 kali dari produk yang sudah memiliki 2 buah
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data produk bernomor index 0 dari urutan atas)
        cy.get('[data-testid="input-text-min"]').eq(0).click()
        //Jeda 5 detik
        cy.wait(5000)
        //Memverifikasi icon keranjang berkurang jumlah menjadi 1
        //Menyesuaikan kebutuhan, bahwa verifikasi berdasarkan jumlah produk di icon keranjang sebanyak 2 buah 
        cy.get('.header-counter').should('contain', '1')
    })
})