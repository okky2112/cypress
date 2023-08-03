describe('Scenario Tambah Alamat Baru', () => {
    it('TC5.1 - Melakukan tambah alamat baru dengan data valid', () => {
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
        //Klik menu "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Judul Alamat"
        cy.get('#label').type('Rumah')
        //Input kolom "Nama Lengkap"
        cy.get('#name').type('Muhammad Okky Irawan')
        //Input kolom "Nomor Ponsel"
        cy.get('#mobile').type('81994114234')
        //Input kolom "Alamat"
        cy.get('#street1').type('Jl. Kecapi No.21')
        //Klik dropdown "Provinsi"
        cy.get('#provinceId > .ant-select-selection > .ant-select-arrow > .anticon').click()
        //Klik opsi "Bali"
        cy.contains('Bali').click()
        //Memberi jeda 5 detik untuk memberi waktu mereload elemen 
        cy.wait(5000)
        //Klik dropdown "Kota"
        cy.get('#cityId > .ant-select-selection > .ant-select-arrow > .anticon').click()
        //Klik opsi "Badung"
        cy.contains('Badung').click()
        //Memberi jeda 5 detik untuk memberi waktu mereload elemen 
        cy.wait(5000)
        //Klik dropdown "Kecamatan"
        cy.get('#districtId > .ant-select-selection').click()
        //Klik opsi "Mengwi"
        cy.contains('Mengwi').click()
        //Memberi jeda 5 detik untuk memberi waktu mereload elemen 
        cy.wait(5000)
        //Klik dropdown "Kode pos - kelurahan"
        cy.get('#subDistrictId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click()
        //Klik opsi "80351 - Abianbase"
        cy.contains('80351 - Abianbase').click()
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
    })

    it('TC5.2 - Melakukan tambah alamat baru dengan mengosongkan kolom judul alamat', () => {
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
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Judul Alamat"
        cy.get('#label').type('Rumah').clear()
        //Verifikasi kemunculan error message ketika kolom judul alamat dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Judul alamat wajib diisi')
    })

    it('TC5.3 - Melakukan tambah alamat baru dengan input angka saja pada kolom judul alamat', () => {
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
        cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
        //Klik navigasi "Profil"
        cy.get('.css-mmq9kd').click()
        //Klik opsi "Akun Saya"
        cy.get('.css-1u1cwib > :nth-child(1)').click()
        //Klik menu "Dashboard Personal"
        cy.get(':nth-child(1) > .css-4orrkg > .css-1wh9kpv > .ant-btn').click()
        //Klik menu "Daftar Alamat"
        cy.get('.css-1bowmeh').click()
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Judul Alamat" salah
        cy.get('#label').type('123')
        //Verifikasi kemunculan error message ketika menginput angka saja pada kolom judul alamat
        cy.get('.ant-form-explain').should('contain', 'Hanya dapat berupa huruf, spasi dan/atau !@#')
    })

    it('TC5.4 - Melakukan tambah alamat baru dengan mengosongkan kolom nama lengkap', () => {
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
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Nama Lengkap"
        cy.get('#name').type('Muhammad Okky Irawan').clear()
        //Verifikasi kemunculan error message ketika menginput angka saja pada kolom nama lengkap
        cy.get('.ant-form-explain').should('contain', 'Nama lengkap wajib diisi')
    })

    it('TC5.5 - Melakukan tambah alamat baru dengan input angka saja pada kolom nama lengkap', () => {
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
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Nama Lengkap"
        cy.get('#name').type('123')
        //Verifikasi kemunculan error message ketika menginput angka saja pada kolom nama lengkap
        cy.get('.ant-form-explain').should('contain', 'Hanya dapat berupa huruf, spasi dan/atau !@#$')
    })

    it('TC5.6 - Melakukan tambah alamat baru dengan mengosongkan kolom nomor ponsel', () => {
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
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Nomor Ponsel"
        cy.get('#mobile').type('81994114234').clear()
        //Verifikasi kemunculan error message ketika kolom nomor ponsel dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Nomor ponsel wajib diisi')
    })

    it('TC5.7 - Melakukan tambah alamat baru dengan mengosongkan kolom alamat', () => {
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
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Alamat"
        cy.get('#street1').type('Jl. Kecapi No.21').clear()
        //Verifikasi kemunculan error message ketika kolom alamat dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Alamat wajib diisi')
    })

    it.only('TC5.8 - Melakukan tambah alamat baru dengan input data kurang dari 5 karakter pada kolom alamat', () => {
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
        //Klik button "Tambah Alamat Baru"
        cy.get('.css-1mky8sx > .ant-btn').click()
        //Input kolom "Judul Alamat"
        cy.get('#label').type('Rumah')
        //Input kolom "Nama Lengkap"
        cy.get('#name').type('Muhammad Okky Irawan')
        //Input kolom "Nomor Ponsel"
        cy.get('#mobile').type('81994114234')
        //Input kolom "Alamat"
        cy.get('#street1').type('Jl.')
        //Klik dropdown "Provinsi"
        cy.get('#provinceId > .ant-select-selection > .ant-select-arrow > .anticon').click()
        //Klik opsi "Banten"
        cy.contains('Banten').click()
        //Memberi jeda 5 detik untuk memberi waktu mereload elemen 
        cy.wait(5000)
        //Klik dropdown "Kota"
        cy.get('#cityId > .ant-select-selection > .ant-select-arrow > .anticon').click()
        //Klik opsi "Lebak"
        cy.contains('Lebak').click()
        //Memberi jeda 5 detik untuk memberi waktu mereload elemen 
        cy.wait(5000)
        //Klik dropdown "Kecamatan"
        cy.get('#districtId > .ant-select-selection').click()
        //Klik opsi "Bayah"
        cy.contains('Bayah').click()
        //Memberi jeda 5 detik untuk memberi waktu mereload elemen 
        cy.wait(5000)
        //Klik dropdown "Kode pos - kelurahan"
        cy.get('#subDistrictId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click()
        //Klik opsi "42393 - Darmasari"
        cy.contains('42393 - Darmasari').click()
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Verifikasi kemunculan error message ketika menginput data kurang dari 5 karakter pada kolom alamat 
        cy.get('.ant-message-custom-content > span').should('contain', 'street1 string length must be greater than or equal to 5')
    })
})