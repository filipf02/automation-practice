describe('visit verify accout page',() => {
  beforeEach('should open page',() => {
  cy.visit('https://qaplayground.dev/apps/verify-account/')
})

it('should test body elements',() => {
cy.testBodyElements()
})

it('should test inputing valid code',() => {

cy.get('.code-container > :nth-child(1)')
  .should('be.visible')
  .type('999999').should('have.value', '9')
cy.get('.code-container > :nth-child(2)')
  .should('have.value', '9')
cy.get('.code-container > :nth-child(3)')
  .should('have.value', '9')
cy.get('.code-container > :nth-child(4)')
  .should('have.value', '9')
cy.get('.code-container > :nth-child(5)')
  .should('have.value', '9')
cy.get('.code-container > :nth-child(6)')
  .should('have.value', '9')

cy.get('.info')
.should('contain', 'Success')
})
})