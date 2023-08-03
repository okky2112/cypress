describe('Live chat', () => {
  it('Error Message Live Chat Bhinneka Untuk Pembelian Personal (Mode Offline) - Format Telepon Salah', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Pembelian Personal"
    cy.get('#personal-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Muhammad')
    //Input Email
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('gajahmp2000@gmail.com')
    //Input No.Telepon Salah
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('19273981447649812')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks pada kolom Pesan
    cy.get('[data-testid="textarea"]').type('Bagaimana cara membuka toko sendiri di Bhinneka.com?')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwa "Format telepon salah"
    cy.get(':nth-child(3) > .children-item > .css-15da32y > :nth-child(1) > .css-1eoh06y').should('contain', 'Format telepon salah!')
  })

  it('Error Message Live Chat Bhinneka Untuk Pembelian Personal (Mode Offline) - Nama Minimal 3 Karakter', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Passwword
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Pembelian Personal"
    cy.get('#personal-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama salah
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Mu')
    //Input Password
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('gajahmp2000@gmail.com')
    //Input No.Telepon
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('8199114234')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks pada kolom Pesan
    cy.get('[data-testid="textarea"]').type('Bagaimana cara membuka toko sendiri di Bhinneka.com?')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwa "Nama minimal 3 karakter" 
    cy.get('.css-1eoh06y').should('contain', 'Nama minimal 3 karakter!')
  })

  it('Error Message Live Chat Bhinneka Untuk Pembelian Personal (Mode Offline) - Format Email Salah', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Pembelian Personal"
    cy.get('#personal-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Muhammad')
    //Input Email salah
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('1234')
    //Input No.Telepon
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('8199114234')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks pada kolom Pesan
    cy.get('[data-testid="textarea"]').type('Bagaimana cara membuka toko sendiri di Bhinneka.com?')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwa "Format email salah"
    cy.get('.css-1eoh06y').should('contain', 'Format email salah!')
  })

  it('Error Message Live Chat Bhinneka Untuk Pembelian Personal (Mode Offline) - Pesan Minimal 10 Karakter', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Pembelian Personal"
    cy.get('#personal-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Muhammad')
    //Input Password
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('gajahmp2000@gmail.com')
    //Input No.Telepon
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('8199114234')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks salah pada kolom Pesan 
    cy.get('[data-testid="textarea"]').type('tes pesan')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwa "Pesan minimal 10 karakter"
    cy.get('.css-1eoh06y').should('contain', 'Pesan minimal 10 karakter!')
  })

  it('Live Chat Bhinneka Untuk Pembelian Personal (Mode Online)', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Username
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Pembelian Personal"
    cy.get('#personal-chat').click()
  })

  it('Live Chat Bhinneka Untuk Pembelian Korporat (Mode Offline) ', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Username
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Pembelian Korporat"
    cy.get('#korporat-chat').click()
  })

  it('Live Chat Bhinneka Untuk Pembelian Korporat (Mode Online) ', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button selanjutnya
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Pembelian Korporat"
    cy.get('#korporat-chat').click()
  })

  it('Error Message Live Chat Bhinneka Untuk Customer Service - (Mode Offline) Format Telepon Salah', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Customer Service"
    cy.get('#cso-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Muhammad')
    //Input Email
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('gajahmp2000@gmail.com')
    //Input No.Telepon salah
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('000000000')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks pada kolom Pesan
    cy.get('[data-testid="textarea"]').type('Bagaimana cara membuka toko sendiri di Bhinneka.com?')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwa "Format telepon salah" 
    cy.get('.css-1eoh06y').should('contain', 'Format telepon salah!')
  })

  it('Error Message Live Chat Bhinneka Untuk Customer Service - (Mode Offline) Nama Minimal 3 Karakter', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Customer Service"
    cy.get('#cso-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama salah
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Mu')
    //Input Email
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('gajahmp2000@gmail.com')
    //Input No.Telepon
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('8199114234')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks pada kolom Pesan
    cy.get('[data-testid="textarea"]').type('Bagaimana cara membuka toko sendiri di Bhinneka.com?')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwa "Nama minimal 3 karakter"
    cy.get('.css-1eoh06y').should('contain', 'Nama minimal 3 karakter!')
  })

  it('Error Message Live Chat Bhinneka Untuk Customer Service - (Mode Offline) Format Email Salah', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Customer Service"
    cy.get('#cso-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Muhammad')
    //Input Email salah
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('1234')
    //Input No.Telepon 
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('8199114234')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks pada kolom Pesan
    cy.get('[data-testid="textarea"]').type('Bagaimana cara membuka toko sendiri di Bhinneka.com?')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwa "Format email salah"
    cy.get('.css-1eoh06y').should('contain', 'Format email salah!')
  })

  it.only('Error Message Live chat Bhinneka Untuk Customer Service - (Mode Offline) Pesan Minimal 10 Karakter', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Customer Service"
    cy.get('#cso-chat').click()
    //Memverifikasi bahwa berhasil menampilkan "Form Kontak Email"
    cy.get('.css-9w06o7 > :nth-child(1) > h4').should('contain', 'Form Kontak Email')
    //Input Nama
    cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Muhammad')
    //Input Email
    cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('gajahmp2000@gmail.com')
    //Input No.Telepon
    cy.get('.css-1l09vx4 > [data-testid="input"]').type('8199114234')
    //Klik Dropdown "Subjek"
    cy.get('.css-tlfecz-indicatorContainer').click()
    //Klik opsi "Corporate Sales Team"
    cy.contains('div', 'Corporate Sales Team').click();
    //Input teks salah pada kolom Pesan  
    cy.get('[data-testid="textarea"]').type('tes pesan')
    //Klik button "Kirim Pesan"
    cy.get(':nth-child(6) > .children-item > div').click()
    //Memverifikasi bahwwa "Pesan minimal 10 karakter"
    cy.get('.css-1eoh06y').should('contain', 'Pesan minimal 10 karakter!')
  })

  it('Live Chat Bhinneka Untuk Customer Service - (Mode Online)', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Live Chat Bhinneka"
    cy.get('#btn-chat-cs-bhinneka > span').click()
    //Jeda 3 detik
    cy.wait(3000)
    //Klik opsi "Customer Service"
    cy.get('#cso-chat').click() 
  })

  it('Chat Seller', () => {
    //Masuk ke halaman login
    cy.visit('https://accounts.bhinneka.com/')
    //Input Email
    cy.get('#email').type('gajahmp2000@gmail.com')
    //Klik button "Selanjutnya"
    cy.get('#next').click()
    //Input Password
    cy.get('#password').type('Macanmp2000+')
    //Klik button "Masuk"
    cy.get('.ant-form > .ant-btn').click()
    //Memverifikasi bahwa Login Berhasil
    cy.get('.css-ujyk5r > ul > :nth-child(3) > a').should('contain', 'Top Merchant')
    //Klik fitur "Live Chat"
    cy.get('.bt-chat__button').click()
    //Klik button "Chat Seller"
    cy.get('#btn-chat-seller').click()
    //Memverifikasi bahwa berhasil membuka popup "Chat Seller"
    cy.get('.bt-chat__header > p').should('contain', 'Chat Seller')
  })
})