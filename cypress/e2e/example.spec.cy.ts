import '@testing-library/cypress/add-commands';

describe('Tela de exemplo', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Verifica se a mensagem está na tela', () => {
    cy.findByRole('link', {
      name: /learn react/i
    }).should('exist');
  });
});
