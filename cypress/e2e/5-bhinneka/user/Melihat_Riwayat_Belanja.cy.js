describe('Scenario Melihat Riwayat Belanja', () => {
    it('TC12.1 - Melihat semua riwayat belanja', () => {
        //Mengunjungi halaman login
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik icon "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Riwayat Belanja"
        cy.get('.css-1u1cwib > :nth-child(2) > a').click()
        //Verifikasi menampilkan informasi semua riwayat belanja
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-1hwfws3').should('contain', 'Semua Status')
    })

    it('TC12.2 - Melihat riwayat belanja dengan status "Order Diterima"', () => {
        //Mengunjungi halaman login
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik icon "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Riwayat Belanja"
        cy.get('.css-1u1cwib > :nth-child(2) > a').click()
        //Klik dropdown "Status"
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-f1g0nq').click()
        //Klik opsi "Order Diterima"
        cy.contains('Order Diterima').click()
        //Verifikasi menampilkan informasi riwayat belanja dengan status order diterima
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-1hwfws3').should('contain', 'Order Diterima')
    })

    it('TC12.3 - Melihat riwayat belanja dengan status "Pembayaran Diterima"', () => {
        //Mengunjungi halaman login
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik icon "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Riwayat Belanja"
        cy.get('.css-1u1cwib > :nth-child(2) > a').click()
        //Klik dropdown "Status"
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-f1g0nq').click()
        //Klik opsi "Pembayaran Diterima"
        cy.contains('Pembayaran Diterima').click()
        //Verifikasi menampilkan informasi riwayat belanja dengan status pembayaran diterima
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-1hwfws3').should('contain', 'Pembayaran Diterima')
    })

    it('TC12.4 - Melihat riwayat belanja dengan status "Diproses"', () => {
        //Mengunjungi halaman login
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik icon "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Riwayat Belanja"
        cy.get('.css-1u1cwib > :nth-child(2) > a').click()
        //Klik dropdown "Status"
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-f1g0nq').click()
        //Klik opsi "Diproses"
        cy.contains('Diproses').click()
        //Verifikasi menampilkan informasi riwayat belanja dengan status diproses
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-1hwfws3').should('contain', 'Diproses')
    })

    it('TC12.5 - Melihat riwayat belanja dengan status "Dikirim"', () => {
        //Mengunjungi halaman login
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik icon "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Riwayat Belanja"
        cy.get('.css-1u1cwib > :nth-child(2) > a').click()
        //Klik dropdown "Status"
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-f1g0nq').click()
        //Klik opsi "Dikirim"
        cy.contains('Dikirim').click()
        //Verifikasi menampilkan informasi riwayat belanja dengan status dikirim
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-1hwfws3').should('contain', 'Dikirim')
    })

    it('TC12.6 - Melihat riwayat belanja dengan status "Sampai"', () => {
        //Mengunjungi halaman login
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik icon "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Riwayat Belanja"
        cy.get('.css-1u1cwib > :nth-child(2) > a').click()
        //Klik dropdown "Status"
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-f1g0nq').click()
        //Klik opsi "Sampai"
        cy.contains('Sampai').click()
        //Verifikasi menampilkan informasi riwayat belanja dengan status sampai
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-1hwfws3').should('contain', 'Sampai')
    })

    it('TC12.7 - Melihat riwayat belanja dengan status "Dibatalkan"', () => {
        //Mengunjungi halaman login
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik icon "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Riwayat Belanja"
        cy.get('.css-1u1cwib > :nth-child(2) > a').click()
        //Klik dropdown "Status"
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-f1g0nq').click()
        //Klik opsi "Dibatalkan"
        cy.contains('Dibatalkan').click()
        //Verifikasi menampilkan informasi riwayat belanja dengan status dibatalkan
        cy.get(':nth-child(1) > .css-1kx8gxb-container > .css-41f251-control > .css-1hwfws3').should('contain', 'Dibatalkan')
    })
})