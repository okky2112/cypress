describe('Scenario Login Vclass', () => {
  it.only('Berhasil Login', () => {
    cy.visit('https://v-class.gunadarma.ac.id/login/index.php')
    cy.get('#username').type('farhandwima@student.gunadarma.ac.id')
    cy.get('#password').type('farhandwima08')
    cy.get('#loginbtn').click()
    cy.get(':nth-child(1) > .list-group-item > .ml-0 > .media > .media-body').should('contain', 'Dashboard')
  })
  it('Failed Login', () => {
    cy.visit('index.php')
    cy.get('#username').type('salahuser')
    cy.get('#password').type('farhandwima08')
    cy.get('#loginbtn').click()
    cy.get('.alert').should('contain', 'Invalid login, please try again')
  })
})