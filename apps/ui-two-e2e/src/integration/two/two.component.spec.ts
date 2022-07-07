describe('ui-two', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=twocomponent--primary&args=test:Hello+Two;count:1;'
    )
  );
  it('should render the component', () => {
    cy.get('bg-hoard-two').should('exist');
  });
});
