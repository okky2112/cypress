describe('Scenario Hapus Alamat', () => {
    it('TC7.1 - Membatalkan penghapusan alamat', () => {
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
        //Klik icon "Hapus"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.bt-icon-only').eq(0).click()
        //Klik button "Batal"
        cy.get('.ant-modal-footer > :nth-child(1)').click()
    })

    it.only('TC7.2 - Menghapus alamat pada data yang dipilih', () => {
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
        //Klik icon "Hapus"
        //pada nilai "eq" menyesuaikan nomor indeks yang dipilih (data yang ingin dihapus berada di index 0 dari urutan atas)
        cy.get('.bt-icon-only').eq(0).click()
        //Klik button "Hapus"
        cy.get('.ant-btn-danger').click()
    })
})