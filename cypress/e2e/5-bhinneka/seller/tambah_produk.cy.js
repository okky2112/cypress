describe('Scenario Tambah Produk', () => {
    it('Tambah Produk Berhasil', () => {
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
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik navigasi "Seller"
        cy.get('.menu-dekstop > .css-xp7imb').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/')
        //Klik Navigasi "Daftar Produk"
        cy.get(':nth-child(3) > a > .css-12gidp5').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/productlist')
        //Klik button "Tambah Produk"
        cy.get('.css-9vi8jg').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/product/add')
        //Input teks pada kolom "Nama Produk"
        cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
        //Input teks pada kolom "Deskripsi"
        cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
        //Klik button "Edit"
        cy.get('[name="dataproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(5) > .children-item > :nth-child(1) > .css-1iazn6').click()
        //Klik dropdown "Kategori 1"
        cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
        //Klik opsi "Furniture"
        cy.contains('Furniture').click()
        //Klik dropdown "Kategori 2"
        cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
        //Klik opsi "Lampu"
        cy.contains('Lampu').click()
        //Klik dropdown "Kategori 3"
        cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
        //Klik opsi "Lampu Meja"
        cy.contains('Lampu Meja').click()
        //Klik button "Pilih Kategori"
        cy.get('.card-footer > .css-9vi8jg').click()
        //Input nilai pada kolom "Harga Awal"
        cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
        //Input nilai pada kolom "Stok"
        cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
        //Input nilai pada kolom "Berat Produk"
        cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('1')
        //Input nilai pada kolom "Dimensi-Panjang"
        cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type('20')
        //Input nilai pada kolom "Dimensi-Lebar"
        cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
        //Input nilai pada kolom "Dimensi-Tinggi"
        cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
        //Klik upload detail pada media
        const imagefile = 'image.jpeg';
        cy.get(':nth-child(5) > .css-naqo8t > .css-1uj0462 > [data-testid="upload"]').attachFile(imagefile);
        //Memberikan jeda waktu selama 2 detik
        cy.wait(2000)
        //Klik button "Jual Produk"
        cy.get('.css-1xosbdh > .css-9vi8jg').click()
        cy.wait(2000)
        //Memverifikasi ketika berhasil tambah produk maka akan menuju halaman daftar produk dan harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/productlist')
    })

    it.only('Nama Produk Harus Diisi', () => {
        //Mengunjungi halaman login
        cy.visit('https://accounts.bhinneka.com/')
        //Memasukkan username login seller
        cy.get('#email').type('kucingmp2000@gmail.com')
        //Klik tombol "Selanjutnya"
        cy.get('#next').click()
        //Memasukkan password login seller
        cy.get('#password').type('Kucingmp2000+')
        //Klik tombol masuk
        cy.get('.ant-form > .ant-btn').click()
        //Memverifikasi ketika berhasil login dan masuk halaman dashboard
        cy.url().should('include', 'https://www.bhinneka.com/')
        //Klik navigasi "Seller"
        cy.get('.menu-dekstop > .css-xp7imb').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/')
        //Klik Navigasi "Daftar Produk"
        cy.get(':nth-child(3) > a > .css-12gidp5').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/productlist')
        //Klik button "Tambah Produk"
        cy.get('.css-9vi8jg').click()
        //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
        cy.url().should('include', 'https://seller.bhinneka.com/product/add')
        //Klik button "Edit"
        cy.get(':nth-child(4) > .children-item > :nth-child(1) > .css-1iazn6').click()
        //Klik dropdown "Kategori 1"
        cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq').click()
        //Klik opsi "Furniture"
        cy.contains('Furniture').click()
        //Klik dropdown "Kategori 2"
        cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
        //Klik opsi "Lampu"
        cy.contains('Lampu').click()
        //Klik dropdown "Kategori 3"
        cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer > .css-1wygiqv').click()
        //Klik opsi "Lampu Meja"
        cy.contains('Lampu Meja').click()
        //Klik button "Pilih Kategori"
        cy.get('.card-footer > .css-9vi8jg').click()
        //Input teks pada kolom "Deskripsi"
        cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
        //Input nilai pada kolom "Harga Awal"
        cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
        //Input nilai pada kolom "Stok"
        cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
        //Input nilai pada kolom "Berat Produk"
        cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
        //Input nilai pada kolom "Dimensi-Panjang"
        cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
        //Input nilai pada kolom "Dimensi-Lebar"
        cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
        //Input nilai pada kolom "Dimensi-Tinggi"
        cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
        //Klik button "Jual Produk"
        cy.get('.css-1xosbdh > .css-9vi8jg').click()
        //Memverifikasi bahwa kolom "Nama Produk harus diisi"
        cy.get('.css-1eoh06y').should('contain', 'Nama Produk harus diisi')
    })

    it('Nama Produk Minimal 5 Karakter', () => {
      //Mengunjungi halaman login
      cy.visit('https://accounts.bhinneka.com/')
      //Memasukkan username login seller
      cy.get('#email').type('kucingmp2000@gmail.com')
      //Klik tombol "Selanjutnya"
      cy.get('#next').click()
      //Memasukkan password login seller
      cy.get('#password').type('Kucingmp2000+')
      //Klik tombol masuk
      cy.get('.ant-form > .ant-btn').click()
      //Memverifikasi ketika berhasil login dan masuk halaman dashboard
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('tes')
      //Klik button "Edit"
      cy.get(':nth-child(4) > .children-item > :nth-child(1) > .css-1iazn6').click()
      //Klik dropdown "Kategori 1"
      cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq').click()
      //Klik opsi "Furniture"
      cy.contains('Furniture').click()
      //Klik dropdown "Kategori 2"
      cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu"
      cy.contains('Lampu').click()
      //Klik dropdown "Kategori 3"
      cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer > .css-1wygiqv').click()
      //Klik opsi "Lampu Meja"
      cy.contains('Lampu Meja').click()
      //Klik button "Pilih Kategori"
      cy.get('.card-footer > .css-9vi8jg').click()
      //Input teks pada kolom "Deskripsi"
      cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
      //Input nilai pada kolom "Harga Awal"
      cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
      //Input nilai pada kolom "Stok"
      cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
      //Input nilai pada kolom "Berat Produk"
      cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
      //Input nilai pada kolom "Dimensi-Panjang"
      cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
      //Input nilai pada kolom "Dimensi-Lebar"
      cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
      //Input nilai pada kolom "Dimensi-Tinggi"
      cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa kolom "Nama Produk minimal 5 karakter"
      cy.get('.css-1eoh06y').should('contain', 'Nama Produk minimal 5 karakter')
    })

    it('Kategori Harus Dipilih', () => {
      //Mengunjungi halaman login
      cy.visit('https://accounts.bhinneka.com/')
      //Memasukkan username login seller
      cy.get('#email').type('kucingmp2000@gmail.com')
      //Klik tombol "Selanjutnya"
      cy.get('#next').click()
      //Memasukkan password login seller
      cy.get('#password').type('Kucingmp2000+')
      //Klik tombol masuk
      cy.get('.ant-form > .ant-btn').click()
      //Memverifikasi ketika berhasil login dan masuk halaman dashboard
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
      //Input teks pada kolom "Deskripsi"
      cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
      //Input nilai pada kolom "Harga Awal"
      cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
      //Input nilai pada kolom "Stok"
      cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
      //Input nilai pada kolom "Berat Produk"
      cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
      //Input nilai pada kolom "Dimensi-Panjang"
      cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
      //Input nilai pada kolom "Dimensi-Lebar"
      cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
      //Input nilai pada kolom "Dimensi-Tinggi"
      cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa "Kategori harus dipilih"
      cy.get('.css-1eoh06y').should('contain', 'Kategori harus dipilih')
    })

    it('Deskripsi Harus Diisi', () => {
      //Mengunjungi halaman login
      cy.visit('https://accounts.bhinneka.com/')
      //Memasukkan username login seller
      cy.get('#email').type('kucingmp2000@gmail.com')
      //Klik tombol "Selanjutnya"
      cy.get('#next').click()
      //Memasukkan password login seller
      cy.get('#password').type('Kucingmp2000+')
      //Klik tombol masuk
      cy.get('.ant-form > .ant-btn').click()
      //Memverifikasi ketika berhasil login dan masuk halaman dashboard
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
      //Klik button "Edit"
      cy.get('[name="dataproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(5) > .children-item > :nth-child(1) > .css-1iazn6').click()
      //Klik dropdown "Kategori 1"
      cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Furniture"
      cy.contains('Furniture').click()
      //Klik dropdown "Kategori 2"
      cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu"
      cy.contains('Lampu').click()
      //Klik dropdown "Kategori 3"
      cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu Meja"
      cy.contains('Lampu Meja').click()
      //Klik button "Pilih Kategori"
      cy.get('.card-footer > .css-9vi8jg').click()
      //Input nilai pada kolom "Harga Awal"
      cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
      //Input nilai pada kolom "Stok"
      cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
      //Input nilai pada kolom "Berat Produk"
      cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
      //Input nilai pada kolom "Dimensi-Panjang"
      cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
      //Input nilai pada kolom "Dimensi-Lebar"
      cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
      //Input nilai pada kolom "Dimensi-Tinggi"
      cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa "Deskripsi harus diisi"
      cy.get('.css-1eoh06y').should('contain', 'Deskripsi harus diisi')
    }) 

    it('Harga Awal Harus Diisi', () => {
      //Mengunjungi halaman login
      cy.visit('https://accounts.bhinneka.com/')
      //Memasukkan username login seller
      cy.get('#email').type('kucingmp2000@gmail.com')
      //Klik tombol "Selanjutnya"
      cy.get('#next').click()
      //Memasukkan password login seller
      cy.get('#password').type('Kucingmp2000+')
      //Klik tombol masuk
      cy.get('.ant-form > .ant-btn').click()
      //Memverifikasi ketika berhasil login dan masuk halaman dashboard
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
      //Input teks pada kolom "Deskripsi"
      cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
      //Klik button "Edit"
      cy.get('[name="dataproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(5) > .children-item > :nth-child(1) > .css-1iazn6').click()
      //Klik dropdown "Kategori 1"
      cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Furniture"
      cy.contains('Furniture').click()
      //Klik dropdown "Kategori 2"
      cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu"
      cy.contains('Lampu').click()
      //Klik dropdown "Kategori 3"
      cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu Meja"
      cy.contains('Lampu Meja').click()
      //Klik button "Pilih Kategori"
      cy.get('.card-footer > .css-9vi8jg').click()
      //Input nilai pada kolom "Stok"
      cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
      //Input nilai pada kolom "Berat Produk"
      cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
      //Input nilai pada kolom "Dimensi-Panjang"
      cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
      //Input nilai pada kolom "Dimensi-Lebar"
      cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
      //Input nilai pada kolom "Dimensi-Tinggi"
      cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa "Harga Awal harus diisi"
      cy.get('.css-1eoh06y').should('contain', 'Harga Awal harus diisi')
    })

    it('Stok Harus Diisi', () => {
      //Mengunjungi halaman login
      cy.visit('https://accounts.bhinneka.com/')
      //Memasukkan username login seller
      cy.get('#email').type('kucingmp2000@gmail.com')
      //Klik tombol "Selanjutnya"
      cy.get('#next').click()
      //Memasukkan password login seller
      cy.get('#password').type('Kucingmp2000+')
      //Klik tombol masuk
      cy.get('.ant-form > .ant-btn').click()
      //Memverifikasi ketika berhasil login dan masuk halaman dashboard
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
      //Input teks pada kolom "Deskripsi"
      cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
      //Klik button "Edit"
      cy.get('[name="dataproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(5) > .children-item > :nth-child(1) > .css-1iazn6').click()
      //Klik dropdown "Kategori 1"
      cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Furniture"
      cy.contains('Furniture').click()
      //Klik dropdown "Kategori 2"
      cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu"
      cy.contains('Lampu').click()
      //Klik dropdown "Kategori 3"
      cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu Meja"
      cy.contains('Lampu Meja').click()
      //Klik button "Pilih Kategori"
      cy.get('.card-footer > .css-9vi8jg').click()
      //Input nilai pada kolom "Harga Awal"
      cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
      //Input nilai pada kolom "Berat Produk"
      cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
      //Input nilai pada kolom "Dimensi-Panjang"
      cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
      //Input nilai pada kolom "Dimensi-Lebar"
      cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
      //Input nilai pada kolom "Dimensi-Tinggi"
      cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa "Stok harus diisi"
      cy.get('.css-1eoh06y').should('contain', 'Stok harus diisi')
    })

    it('Berat Produk Harus Diisi', () => {
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
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
      //Input teks pada kolom "Deskripsi"
      cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
      //Klik button "Edit"
      cy.get('[name="dataproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(5) > .children-item > :nth-child(1) > .css-1iazn6').click()
      //Klik dropdown "Kategori 1"
      cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Furniture"
      cy.contains('Furniture').click()
      //Klik dropdown "Kategori 2"
      cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu"
      cy.contains('Lampu').click()
      //Klik dropdown "Kategori 3"
      cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu Meja"
      cy.contains('Lampu Meja').click()
      //Klik button "Pilih Kategori"
      cy.get('.card-footer > .css-9vi8jg').click()
      //Input nilai pada kolom "Harga Awal"
      cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
      //Input nilai pada kolom "Stok"
      cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
      //Input nilai pada kolom "Dimensi-Panjang"
      cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
      //Input nilai pada kolom "Dimensi-Lebar"
      cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
      //Input nilai pada kolom "Dimensi-Tinggi"
      cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa "Berat Produk harus diisi"
      cy.get('.css-1eoh06y').should('contain', 'Berat Produk harus diisi')
    })

    it('Dimensi Produk Harus Diisi', () => {
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
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
      //Input teks pada kolom "Deskripsi"
      cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
      //Klik button "Edit"
      cy.get('[name="dataproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(5) > .children-item > :nth-child(1) > .css-1iazn6').click()
      //Klik dropdown "Kategori 1"
      cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Furniture"
      cy.contains('Furniture').click()
      //Klik dropdown "Kategori 2"
      cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu"
      cy.contains('Lampu').click()
      //Klik dropdown "Kategori 3"
      cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu Meja"
      cy.contains('Lampu Meja').click()
      //Klik button "Pilih Kategori"
      cy.get('.card-footer > .css-9vi8jg').click()
      //Input nilai pada kolom "Harga Awal"
      cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
      //Input nilai pada kolom "Stok"
      cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
      //Input nilai pada kolom "Berat Produk"
      cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa "Dimensi Produk harus diisi"
      cy.get('.css-1eoh06y').should('contain', 'Dimensi Produk harus diisi')
    })

    it.only('Media Produk Harus Diisi', () => {
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
      cy.url().should('include', 'https://www.bhinneka.com/')
      //Klik navigasi "Seller"
      cy.get('.menu-dekstop > .css-xp7imb').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Seller" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/')
      //Klik Navigasi "Daftar Produk"
      cy.get(':nth-child(3) > a > .css-12gidp5').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Daftar Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/productlist')
      //Klik button "Tambah Produk"
      cy.get('.css-9vi8jg').click()
      //Memverifikasi ketika berhasil masuk ke halaman url "Tambah Produk" harus mengandung url berikut
      cy.url().should('include', 'https://seller.bhinneka.com/product/add')
      //Input teks pada kolom "Nama Produk"
      cy.get(':nth-child(3) > .children-item > :nth-child(1) > .css-9ep65o > [data-testid="input"]').type('Lampu UFO RGB')
      //Input teks pada kolom "Deskripsi"
      cy.get('[name="deskripsiproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(1) > .children-item').type('Lampu ini mempunyai beragam warna dan bisa diatur sendiri dan cocok untuk tidur')
      //Klik button "Edit"
      cy.get('[name="dataproduk"] > .css-hg1jte > .css-52u0ov > .css-60cj7g > :nth-child(5) > .children-item > :nth-child(1) > .css-1iazn6').click()
      //Klik dropdown "Kategori 1"
      cy.get('.css-52u0ov > :nth-child(1) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Furniture"
      cy.contains('Furniture').click()
      //Klik dropdown "Kategori 2"
      cy.get(':nth-child(2) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu"
      cy.contains('Lampu').click()
      //Klik dropdown "Kategori 3"
      cy.get(':nth-child(3) > .css-1cgfqr8-container > .css-41f251-control > .css-f1g0nq > .css-tlfecz-indicatorContainer').click()
      //Klik opsi "Lampu Meja"
      cy.contains('Lampu Meja').click()
      //Klik button "Pilih Kategori"
      cy.get('.card-footer > .css-9vi8jg').click()
      //Input nilai pada kolom "Harga Awal"
      cy.get('.children-item > :nth-child(1) > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type('200000')
      //Input nilai pada kolom "Stok"
      cy.get(':nth-child(11) > .children-item > :nth-child(1) > .css-mgvovs > .css-9ep65o > [data-testid="input"]').type('1')
      //Input nilai pada kolom "Berat Produk"
      cy.get(':nth-child(1) > .children-item > :nth-child(1) > .css-155ahkq > .css-gw25jo > .css-1l09vx4 > [data-testid="input"]').type(0.12)
      //Input nilai pada kolom "Dimensi-Panjang"
      cy.get(':nth-child(2) > .children-item > :nth-child(1) > .css-155ahkq > :nth-child(1) > .css-1l09vx4 > [data-testid="input"]').type(20)
      //Input nilai pada kolom "Dimensi-Lebar"
      cy.get(':nth-child(2) > .css-1l09vx4 > [data-testid="input"]').type('20')
      //Input nilai pada kolom "Dimensi-Tinggi"
      cy.get(':nth-child(3) > .css-1l09vx4 > [data-testid="input"]').type('10')
      //Klik button "Jual Produk"
      cy.get('.css-1xosbdh > .css-9vi8jg').click()
      //Memverifikasi bahwa "Media Produk harus diisi"
      cy.get('h5').should('contain', 'Gagal')
    })
})