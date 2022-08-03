describe('relib-two: RelibTwo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=relibtwo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to RelibTwo!');
    });
});
