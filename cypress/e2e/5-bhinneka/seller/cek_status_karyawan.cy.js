describe('Scenario Cek Status Karyawan', () => { 
    it('Status Karyawan Aktif', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('kucingmp2000@gmail.com')
        //Klik button "Selanjutnya"
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
        //Klik navigasi "Pengaturan"
        cy.get(':nth-child(8) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Pengaturan" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/settings')
        //Klik menu "Karyawan"
        cy.get(':nth-child(5) > .css-1q9mn9k > .css-19kzrtu > a > .css-1r1c7w4 > .css-1snd13 > h4').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Karyawan" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/settings/employee')
        //Memverifikasi bahwa status karyawan "Aktif"
        cy.get('.css-ag8hs0').should('contain', 'Aktif')        
    })

    it.only('Status Karyawan Nonaktif', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('kucingmp2000@gmail.com')
        //Klik button "Selanjutnya"
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
        //Klik navigasi "Pengaturan"
        cy.get(':nth-child(8) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Pengaturan" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/settings')
        //Klik menu "Karyawan"
        cy.get(':nth-child(5) > .css-1q9mn9k > .css-19kzrtu > a > .css-1r1c7w4 > .css-1snd13 > h4').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Karyawan" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/settings/employee')
        //Memverifikasi bahwa status karyawan "Tidak Aktif"
        cy.get('.css-17lqth2').should('contain','Tidak Aktif')        
    })

})