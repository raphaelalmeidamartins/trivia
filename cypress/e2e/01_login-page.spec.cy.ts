import '@testing-library/cypress/add-commands';

describe('Acessa tela de login', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Verifica se os elementos estão na tela', () => {
    cy.findByRole('heading', {
      name: /sign in to play/i,
    }).should('exist');

    cy.findByPlaceholderText(/enter your name/i).should('be.visible');
    cy.findByPlaceholderText(/enter your email/i).should('be.visible');
    cy.findByRole('button', { name: /play/i }).should('be.visible');
    cy.findByRole('button', { name: /settings/i }).should('be.visible');
  });

  it('Os inputs deve estar vazios e o botão de jogar desabilitado', () => {
    cy.findByPlaceholderText(/enter your name/i).should('be.empty');
    cy.findByPlaceholderText(/enter your email/i).should('be.empty');
    cy.findByRole('button', { name: /play/i }).should('be.disabled');
    cy.findByRole('button', { name: /settings/i }).should('be.enabled');
  });

  it('O botão de jogar deve permanecer desabilitado se o email estiver vazio', () => {
    cy.findByPlaceholderText(/enter your name/i).type('Raphael Martins');
    cy.findByRole('button', { name: /play/i }).should('be.disabled');
  });

  it('O botão de jogar deve permanecer desabilitado se o nome estiver vazio', () => {
    cy.findByPlaceholderText(/enter your email/i).type(
      'raphael.almeida.martins@gmail.com'
    );
    cy.findByRole('button', { name: /play/i }).should('be.disabled');
  });

  it('O botão de jogar deve permanecer desabilitado se o email tiver um formato inválido', () => {
    cy.findByPlaceholderText(/enter your name/i).type('Raphael Martins');
    cy.findByPlaceholderText(/enter your email/i).type(
      'raphael.almeida.martins'
    );
    cy.findByRole('button', { name: /play/i }).should('be.disabled');
  });

  it('Ao clicar em jogar, o usuário é redirecionado para a tela do jogo', () => {
    cy.findByPlaceholderText(/enter your name/i).type('Raphael Martins');
    cy.findByPlaceholderText(/enter your email/i).type(
      'raphael.almeida.martins@gmail.com'
    );
    cy.findByRole('button', { name: /play/i }).click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#/game`);
  });
});
