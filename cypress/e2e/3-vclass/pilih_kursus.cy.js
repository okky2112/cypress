describe('Scenario Pilih Kursus', () => {
    it('Berhasil pilih kursus', () => {
      cy.visit('index.php')
      cy.get('#username').type('farhandwima@student.gunadarma.ac.id')
      cy.get('#password').type('farhandwima08')
      cy.get('#loginbtn').click()
      cy.get(':nth-child(2) > .list-group-item > .ml-0 > .media > .media-body').click()
      cy.get('#shortsearchbox').type('4IA05')
      cy.get('.coursesearchbox > .btn-secondary').click()
      cy.get(':nth-child(1) > .mt-1 > :nth-child(2) > .page-link').click()
      cy.get('.first > .info > .coursename > a').click()
      cy.url().should('include', 'https://v-class.gunadarma.ac.id/enrol/index.php?id=23228')
    })
})