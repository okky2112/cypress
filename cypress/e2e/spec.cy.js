describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    //Mengunjungi:https://example.cypress.io
    cy.visit('https://example.cypress.io')
    //Temukan elemen dengan konten:type, Klik di atasnya
    cy.contains('type').click()
    //Dapatkan URL-nya, Tegaskan itu termasuk:/commands/actions
    cy.url()
      .should('include', '/commands/actions')
    //Dapatkan input dengan #email1, Ketik fake@email.com ke input
    cy.get('#email1')
      .type('fake@email.com')
    //Menegaskan input mencerminkan nilai baru
      .should('value', 'fake@email.com')
  })
})