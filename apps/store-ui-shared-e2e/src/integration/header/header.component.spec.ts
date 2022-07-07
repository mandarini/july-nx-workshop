describe('store-ui-shared', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=headercomponent--primary&args=title:Katerina;')
  );
  it('should render the component', () => {
    cy.get('bg-hoard-header').should('exist');
  });

  it('should have the correct title', () => {
    cy.get('bg-hoard-header').contains('Katerina');
  });
});
