describe('Scenario Ubah Alamat', () => {
    it('TC6.1 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan data valid', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya lalu input data valid pada kolom judul alamat
        cy.get('#label').clear().type('Kantor')
        //Menghapus karakter sebelumnya lalu input data valid pada kolom nama lengkap
        cy.get('#name').clear().type('Setiawan')
        //Menghapus karakter sebelumnya lalu input data valid pada kolom nomor ponsel
        cy.get('#mobile').clear().type('812363726')
        //Menghapus karakter sebelumnya lalu input data valid pada kolom alamat
        cy.get('#street1').clear().type('Jl. Durian No.21')
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
    })

    it('TC6.2 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan mengosongkan kolom judul alamat', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya pada kolom judul alamat
        cy.get('#label').clear()
        //Verifikasi kemunculan error message ketika kolom judul alamat dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Judul alamat wajib diisi')
    })

    it('TC6.3 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan input angka saja pada kolom judul alamat ', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya lalu input dengan angka saja pada kolom judul alamat
        cy.get('#label').clear().type('4567')
        //Verifikasi kemunculan error message ketika menginput angka saja pada kolom judul alamat
        cy.get('.ant-form-explain').should('contain', 'Hanya dapat berupa huruf, spasi dan/atau !@#$')
    })

    it('TC6.4 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan mengosongkan kolom nama lengkap', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya dan mengosongkan pada kolom nama lengkap
        cy.get('#name').clear()
        //Verifikasi kemunculan error message ketika kolom nama lengkap dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Nama lengkap wajib diisi')
    })

    it('TC6.5 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan input angka saja pada kolom nama lengkap', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya lalu input dengan angka pada kolom nama lengkap
        cy.get('#name').clear().type('4567')
        //Verifikasi kemunculan error message ketika menginput angka saja pada kolom nama lengkap
        cy.get('.ant-form-explain').should('contain', 'Hanya dapat berupa huruf, spasi dan/atau !@#$')
    })

    it('TC6.6 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan mengosongkan kolom nomor ponsel', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya lalu mengosongkan pada kolom nomor ponsel
        cy.get('#mobile').clear()
        //Verifikasi kemunculan error message ketika kolom nomor ponsel dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Nomor ponsel wajib diisi')
    })

    it('TC6.7 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan mengosongkan kolom alamat', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya lalu kosongkan pada kolom alamat
        cy.get('#street1').clear()
        //Verifikasi kemunculan error message ketika kolom alamat dikosongkan
        cy.get('.ant-form-explain').should('contain', 'Alamat wajib diisi')
    })

    it('TC6.8 - Melakukan ubah alamat pada data yang sudah ada sebelumnya dengan input data kurang dari 5 karakter pada kolom alamat', () => {
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
        //Klik button "Ubah"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.css-1m1uiy4 > :nth-child(3)').eq(0).click()
        //Menghapus karakter sebelumnya lalu input kurang dari 5 karakter pada kolom alamat
        cy.get('#street1').clear().type('jala')
        //Klik button "Simpan"
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        //Verifikasi kemunculan error message ketika menginput data kurang dari 5 karakter pada kolom alamat
        cy.get('.ant-message-custom-content > span').should('contain', 'street1 string length must be greater than or equal to 5')
    })
})