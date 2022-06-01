describe('Home', () => {
  it('should have a h1 with a title', async () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains(/Home - Teste de fluxo novas features/gi);
  });
});
