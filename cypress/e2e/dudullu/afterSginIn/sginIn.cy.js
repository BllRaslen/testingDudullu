describe('SignIn Page Tests', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('/login');
        cy.url().should('eq', 'https://test.dudullu.com/login');

        // Log successful visit
        cy.log('Siteye başarıyla ziyaret edildi');
    });

    it('Google Button Click', () => {
        cy.get('.login-form_social-media-button-form__Bqn6y:first-of-type button').click();
        cy.go('back');
        cy.wait(2000); // Adjust the wait time as needed
    });

    it('Facebook Button Click', () => {
        cy.get('.login-form_social-media-button-form__Bqn6y:last-of-type button').click();
        cy.go('back');
        cy.wait(2000); // Adjust the wait time as needed
    });

    it.only('Login Form Submission', () => {
        // Type username and password
        cy.get('#username').type('testingkullnici');
        cy.get('#password').type('BilalSYR2002.');

        cy.wait(2000)

        // Click the submit button
        cy.get('.login-form_submit-button__QmMj9').click();
        cy.wait(2000)


        cy.visit('https://dudullu.com/login')
        cy.wait(2000)
        cy.get('#username').type('testingkullnici');
        cy.get('#password').type('BilalSYR2002.');
        cy.wait(2000)


        // Click the submit button
        cy.get('.login-form_submit-button__QmMj9').click();
        cy.wait(2000)



    });
});
