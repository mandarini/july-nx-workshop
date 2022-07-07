describe('ui-one', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=onecomponent--primary&args=test:Hello+One;')
  );
  it('should render the component', () => {
    cy.get('bg-hoard-one').should('exist');
  });
});
