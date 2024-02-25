describe('Test left sidebar content', () => {
    it('Verifies the content of the left sidebar', () => {
        // Visit the page or load the HTML content with the left sidebar
        cy.visit('https://test.dudullu.com/');

        // Verify the title
        cy.contains('Yazar Hakkında').should('be.visible');

        // Verify the avatar
        cy.get('.MuiAvatar-root').should('be.visible');

        // Verify the author name
        cy.contains('Haber').should('be.visible');

        // Verify the author handle
        cy.contains('@Haber Hattı').should('be.visible');

        // Verify the follow button
        cy.get('button').should('have.css', 'border-color', 'rgb(0, 210, 131)')
            .and('have.css', 'color', 'rgb(0, 210, 131)')
            .and('have.css', 'border-radius', '8px')
            .and('have.text', '+ Takip Et');

        // Verify the "Daha fazlası ..." link
        cy.contains('Daha fazlası ...').should('have.attr', 'href', '/profile/Haber Hattı')
            .and('have.css', 'color', 'rgb(70, 202, 254)');
    });
});
