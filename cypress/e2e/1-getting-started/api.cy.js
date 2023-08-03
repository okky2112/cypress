describe('test api reqres', () => {
    it('Get list user', () => {
        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})