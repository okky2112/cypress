describe('Scenario Update Profil', () => {
    it('Ubah Password Berhasil', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Macanmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Akun Saya" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member')
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Dashboard Personal" harus mengandung url berikut
        cy.url().should('include', 'https://www.bhinneka.com/member')
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Alamat" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/address')
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Profil" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/profile')
        //Klik "Ubah"
        cy.get(':nth-child(2) > .css-1c4cp2 > .ant-btn').click()
        //Memverifikasi ketika berhasil membuka form "Ubah Password" harus mengandung konten berikut
        cy.get('#rcDialogTitle0').should('contain', 'Ubah Password')
        //Input dengan password lama pada kolom "Password Lama"
        cy.get('#oldPassword').type('Macanmp2000+')
        //Input dengan password baru pada kolom "Password Baru"
        cy.get('#newPassword').type('Macanmp2000-')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Memverifikasi ketika berhasil ubah password baru makan akan menuju halaman login dengan harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/')
    })

    it.only('Error Message Ubah Password - Password Lama Tidak Boleh Kosong', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Macanmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Akun Saya" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member')
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Dashboard Personal" harus mengandung url berikut
        cy.url().should('include', 'https://www.bhinneka.com/member')
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Alamat" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/address')
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Profil" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/profile')
        //Klik "Ubah"
        cy.get(':nth-child(2) > .css-1c4cp2 > .ant-btn').click()
        //Memverifikasi ketika berhasil membuka form "Ubah Password" harus mengandung konten berikut
        cy.get('#rcDialogTitle0').should('contain', 'Ubah Password')
        //Input dengan password baru pada kolom "Password Baru"
        cy.get('#newPassword').type('Macanmp2000-')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Memverifikasi bahwa error message muncul
        //cy.get('.ant-form-explain').should('be.visible')
        cy.contains('Old Password kosong.').should('be.visible')
        //Memverifikasi bahwa error message harus mengandung konten berikut
        cy.get('.ant-form-explain').should('contain', 'Old Password kosong.')
    })

    it('Error Message Ubah Password - Password Lama Tidak Sesuai', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Macanmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Akun Saya" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member')
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Dashboard Personal" harus mengandung url berikut
        cy.url().should('include', 'https://www.bhinneka.com/member')
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Alamat" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/address')
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Profil" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/profile')
        //Klik "Ubah"
        cy.get(':nth-child(2) > .css-1c4cp2 > .ant-btn').click()
        //Memverifikasi ketika berhasil membuka form "Ubah Password" harus mengandung konten berikut
        cy.get('#rcDialogTitle0').should('contain', 'Ubah Password')
        //Input dengan password lama yang tidak sesuai pada kolom "Password Lama"
        cy.get('#oldPassword').type('tes')
        //Input dengan password baru pada kolom "Password Baru"
        cy.get('#newPassword').type('Macanmp2000-')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Memverifikasi bahwa "Password Tidak Sesuai" dan error message harus mengandung konten berikut
        cy.get('.ant-message-custom-content > span').should('contain', 'your old password is invalid')
    })

    it('Error Message Ubah Password - Password Lama Harus Kurang Dari 50 Karakter', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Macanmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Akun Saya" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member')
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Dashboard Personal" harus mengandung url berikut
        cy.url().should('include', 'https://www.bhinneka.com/member')
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Alamat" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/address')
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Profil" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/profile')
        //Klik "Ubah"
        cy.get(':nth-child(2) > .css-1c4cp2 > .ant-btn').click()
        //Memverifikasi ketika berhasil membuka form "Ubah Password" harus mengandung konten berikut
        cy.get('#rcDialogTitle0').should('contain', 'Ubah Password')
        //Input dengan password lama yang tidak sesuai pada kolom "Password Lama"
        cy.get('#oldPassword').type('tessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
        //Input dengan password baru pada kolom "Password Baru"
        cy.get('#newPassword').type('Macanmp2000-')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Memverifikasi bahwa "Password Lama Harus Dibawah 50 Karakter" dan error message harus mengandung konten berikut
        cy.get('.ant-message-custom-content > span').should('contain', 'old password string length must be less than or equal to 50')
    })

    it('Error Message Ubah Password - Password Baru Tidak Boleh Kosong', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Macanmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Akun Saya" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member')
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Dashboard Personal" harus mengandung url berikut
        cy.url().should('include', 'https://www.bhinneka.com/member')
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Alamat" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/address')
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Profil" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/profile')
        //Klik "Ubah"
        cy.get(':nth-child(2) > .css-1c4cp2 > .ant-btn').click()
        //Memverifikasi ketika berhasil membuka form "Ubah Password" harus mengandung konten berikut
        cy.get('#rcDialogTitle0').should('contain', 'Ubah Password')
        //Input dengan password lama yang tidak sesuai pada kolom "Password Lama"
        cy.get('#oldPassword').type('macanmp2000+')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Memverifikasi bahwa "Password Baru Tidak Boleh Kosong" dan error message harus mengandung konten berikut
        cy.get('.ant-form-explain').should('contain', 'New Password kosong.')
    })

    it('Error Message Ubah Password - Password Baru Harus Lebih dari 8 Karakter', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('gajahmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Macanmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Akun Saya" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member')
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Dashboard Personal" harus mengandung url berikut
        cy.url().should('include', 'https://www.bhinneka.com/member')
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Alamat" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/address')
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Profil" harus mengandung url berikut
        cy.url().should('include', 'https://accounts.bhinneka.com/member/profile')
        //Klik "Ubah"
        cy.get(':nth-child(2) > .css-1c4cp2 > .ant-btn').click()
        //Memverifikasi ketika berhasil membuka form "Ubah Password" harus mengandung konten berikut
        cy.get('#rcDialogTitle0').should('contain', 'Ubah Password')
        //Input dengan password lama yang tidak sesuai pada kolom "Password Lama"
        cy.get('#oldPassword').type('macanmp2000+')
        //Input dengan password baru pada kolom "Password Baru"
        cy.get('#newPassword').type('tes1234')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Memverifikasi bahwa "Password Baru Harus Lebih Dari 8 Karakter" dan error message harus mengandung konten berikut
        cy.get('.ant-message-custom-content > span').should('contain', 'new password string length must be greater than or equal to 8')
    })

})