describe('Scenario Tambah Karyawan', () => { 
    it('Tambah Karyawan Berhasil', () => {
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
        //Klik button "Undang"
        cy.get('.css-1iazn6').click()
        //Menginput nama pada kolom "Nama Depan"
        cy.get('.css-9ep65o > [data-testid="input-first-name"]').type('Muhammad')
        //Menginput email pada kolom "Email"
        cy.get('.css-9ep65o > [data-testid="input-email"]').type('gajahmp2000@gmail.com')
        //Klik button "Kirim Undangan"
        cy.contains('Kirim Undangan').click()
        //Memverifikasi ketika berhasil tambah karyawan maka akan menampilkan popup dengan keterangan "Berhasil"
        cy.get('h5').should('contain', 'Berhasil')
    })

    it('Error Message Tambah Karyawan - Nama Depan Harus Diisi', () => {
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
        //Klik button "Undang"
        cy.get('.css-1iazn6').click()
        //Menginput nama pada kolom "Nama Depan"
        cy.get('.css-9ep65o > [data-testid="input-first-name"]').type('Muhammad')
        //Menghapus inputan kolom "Nama Depan"
        cy.get('.css-9ep65o > [data-testid="input-first-name"]').clear()
        //Menginput email pada kolom "Email"
        cy.get('.css-9ep65o > [data-testid="input-email"]').type('gajahmp2000@gmail.com')
        //Memverifikasi bahwa "Nama Depan harus diisi!"
        cy.get('.css-1eoh06y').should('contain', 'Nama Depan harus diisi!')
    })

    it('Error Message Tambah Karyawan - Nama Depan minimal 5 karakter', () => {
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
        //Klik button "Undang"
        cy.get('.css-1iazn6').click()
        //Menginput nama pada kolom "Nama Depan" kurang dari 5 karakter
        cy.get('.css-9ep65o > [data-testid="input-first-name"]').type('tes')
        //Menginput email pada kolom "Email"
        cy.get('.css-9ep65o > [data-testid="input-email"]').type('gajahmp2000@gmail.com')
        //Memverifikasi bahwa "Nama Depan minimal 5 karakter"
        cy.get('.css-1eoh06y').should('contain', 'Nama Depan minimal 5 karakter')
    })

    it('Error Message Tambah Karyawan - Email Harus Diisi!', () => {
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
        //Klik button "Undang"
        cy.get('.css-1iazn6').click()
        //Menginput nama pada kolom "Nama Depan"
        cy.get('.css-9ep65o > [data-testid="input-first-name"]').type('Muhammad')
        //Menginput email pada kolom "Email"
        cy.get('.css-9ep65o > [data-testid="input-email"]').type('gajahmp2000@gmail.com')
        //Menghapus inputan pada kolom "Email"
        cy.get('.css-9ep65o > [data-testid="input-email"]').clear()
        //Memverifikasi bahwa "Email harus diisi!"
        cy.get('.css-1eoh06y').should('contain', 'Email harus diisi!')
    })

    it('Error Message Tambah Karyawan - Email Minimal 5 Karakter', () => {
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
        //Klik button "Undang"
        cy.get('.css-1iazn6').click()
        //Menginput nama pada kolom "Nama Depan"
        cy.get('.css-9ep65o > [data-testid="input-first-name"]').type('Muhammad')
        //Menginput email kurang dari 5 karakter pada kolom "Email"
        cy.get('.css-9ep65o > [data-testid="input-email"]').type('tes')
        //Memverifikasi bahwa "Email minimal 5 karakter"
        cy.get('.css-1eoh06y').should('contain', 'Email minimal 5 karakter')
    })

    it.only('Error Message Tambah Karyawan - Format Email Salah', () => {
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
        //Klik button "Undang"
        cy.get('.css-1iazn6').click()
        //Menginput nama pada kolom "Nama Depan"
        cy.get('.css-9ep65o > [data-testid="input-first-name"]').type('Muhammad')
        //Menginput email pada kolom "Email"
        cy.get('.css-9ep65o > [data-testid="input-email"]').type('tes123')
        //Memverifikasi bahwa "Format email salah"
        cy.get('.css-1eoh06y').should('contain', 'Format email salah')
    })
})
