describe('visit verify account page', () => {
    beforeEach('should open page', () => {
        cy.visit('https://qaplayground.dev/apps/verify-account/')
    })

    it('should test body elements', () => {
        cy.testBodyElements(Cypress.env('titleSelector'), Cypress.env('accountVerification'))
        cy.testBodyElements(Cypress.env('msgSelector'), Cypress.env('msgBody'))
        cy.testBodyElements(Cypress.env('infoSelector'), Cypress.env('codeConfirmation'))
        cy.testBodyElements(Cypress.env('footerSelector'), Cypress.env('footerCredits'))
        cy.get(Cypress.env('footerLink')).should('have.attr', 'href', Cypress.env('urlCredits'))
    })
    it('should test inputing invalid code', () => {
        const random = '1' + Math.random().toString().substr(2, 6)

        cy.get('.code-container > :nth-child(1)')
        .should('be.visible')
        .type(random)

        cy.get('.info')
        .should('not.contain', 'Success')

    })
})