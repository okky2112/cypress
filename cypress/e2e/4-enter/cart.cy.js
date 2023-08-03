describe('Scenario Cart', () => {
    it('Berhasil Add to Cart', () => {
      cy.visit('https://www.enterkomputer.com/login')
      //cy.get(':nth-child(3) > .form-control').type('kucingmp2000@gmail.com')
      cy.ketik(':nth-child(3) > .form-control', 'kucingmp2000@gmail.com')
      cy.get('.form-forgot > .form-control').type('burungmp2000')
      cy.get('.submit > .ps-btn').click()
      cy.url().should('include', 'https://www.enterkomputer.com/')
      cy.get('div[title="Accessories"] > .ps-link--concern > .img-fluid').click()
    })
})