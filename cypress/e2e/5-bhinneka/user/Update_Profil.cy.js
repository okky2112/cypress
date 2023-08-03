describe('Scenario Update Profil', () => {
    it('TC4.1 - Melakukan update profil dengan data valid', () => {
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
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik button "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "Nama Depan"
        cy.get('#firstName').clear().type('Muhammad')
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "Nama Belakang"
        cy.get('#lastName').clear().type('Okky')
        //Memberi jeda 5 detik untuk mereload elemen
        cy.wait(2000)
        //Klik dropdown kolom "Tanggal Lahir"
        cy.get('#date > .ant-select-selection').click()
        //Memberi jeda 5 detik untuk mereload elemen
        cy.wait(2000)
        //Pilih opsi "21"
        cy.contains('21').click()
        //Memberi jeda 5 detik untuk mereload elemen
        cy.wait(2000)
        //Klik dropdown kolom "Bulan Lahir"
        cy.get('#month > .ant-select-selection').click()
        //Memberi jeda 5 detik untuk mereload elemen
        cy.wait(2000)
        //Klik opsi "Desember"
        cy.contains('Desember').click()
        //Memberi jeda 5 detik untuk mereload elemen
        cy.wait(2000)
        //Klik dropdown kolom "Tahun Lahir"
        cy.get('#year > .ant-select-selection').click()
        //Memberi jeda 5 detik untuk mereload elemen
        cy.wait(2000)
        //Klik opsi "1991"
        cy.contains('1991').click()
        //Memberi jeda 5 detik untuk mereload elemen
        cy.wait(2000)
        //Klik opsi "Pria"
        cy.get('#gender > :nth-child(1)').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "No. Hanphone"
        cy.get('#mobile').clear().type('8199411423')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
    })

    it('TC4.2 - Melakukan update profil dengan mengosongkan kolom nama depan', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "Nama Depan"
        cy.get('#firstName').clear()
        //Verifikasi kemunculan error message ketika mengosongkan kolom nama depan
        cy.get('.ant-form-explain').should('contain', 'Nama depan wajib diisi')
    })

    it('TC4.3 - Melakukan update profil dengan input angka dan simbol saja pada kolom nama depan', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "Nama Depan"
        cy.get('#firstName').clear().type('@123')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Verifikasi kemunculan error message ketika menginput angka dan simbol saja pada kolom nama depan
        cy.get('.ant-message-custom-content > span').should('contain', 'entry with first name')
    })

    it('TC4.4 - Melakukan update profil dengan input lebih dari 25 karakter pada kolom nama depan', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "Nama Depan"
        cy.get('#firstName').clear().type('muhammad okiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Verifikasi kemunculan error message ketika menginput lebih dari 25 karakter pada kolom nama depan
        cy.get('.ant-message-custom-content > span').should('contain', 'first name string length must be less than or equal to 25')
    })

    it('TC4.5 - Melakukan update profil dengan input angka dan simbol saja pada kolom nama belakang', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "Nama Belakang"
        cy.get('#lastName').clear().type('@123')
        //Verifikasi kemunculan error message ketika menginput angka dan simbol saja pada kolom nama belakang
        cy.get('.ant-form-explain').should('contain', 'Nama Belakang hanya berupa huruf dan spasi.')
    })

    it('TC4.6 - Melakukan update profil dengan input lebih dari 25 karakter pada kolom nama belakang', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "Nama Belakang"
        cy.get('#lastName').clear().type('okiiiiiiiiiiiiiiiiiiiiiiiiiii')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Verifikasi memunculkan error message ketika menginput lebih dari 25 karakter pada kolom nama belakang
        cy.get('.ant-message-custom-content > span').should('contain', 'last name string length must be less than or equal to 25')
    })

    it('TC4.7 - Melakukan update profil dengan input kurang dari 10 karakter pada kolom no.handphone', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "No. Hanphone"
        cy.get('#mobile').clear().type('81994114')
        //Verifikasi kemunculan error message ketika menginput kurang dari 10 karakter pada kolom no.handphone
        cy.get('.ant-form-explain').should('contain', 'Nomor Handphone minimal 10 digit.')
    })

    it('TC4.8 - Melakukan update profil dengan input data bertipe char pada kolom no.handphone', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "No. Hanphone"
        cy.get('#mobile').clear().type('character')
        //Verifikasi kemunculan error message ketika menginput data bertipe char pada kolom no.handphone
        cy.get('.ant-form-explain').should('contain', 'Format Nomor Handphone salah')
    })

    it.only('TC4.9 - Melakukan update profil dengan mengosongkan pada kolom no.handphone', () => {
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
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik menu "Profil"
        cy.get(':nth-child(3) > a').click()
        //Klik "Ubah"
        cy.get(':nth-child(1) > .css-1c4cp2 > .ant-btn').click()
        //Menghapus karakter sebelumnya dan menginput dengan karakter baru di kolom "No. Hanphone"
        cy.get('#mobile').clear()
        //Verifikasi kemunculan error message ketika kolom no.handphone dikosongkan 
        cy.get('.ant-form-explain').should('contain', 'mobile is required')
    })

})