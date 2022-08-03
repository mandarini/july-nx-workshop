describe('relib-one: RelibOne component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=relibone--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to RelibOne!');
    });
});
