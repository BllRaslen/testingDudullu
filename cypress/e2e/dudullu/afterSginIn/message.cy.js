describe('Popüler Kategoriler Testi', () => {
    it('Login Form Submission', () => {
        cy.visit("/login")
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
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiBadge-root > .items_nav-button-icon-container__8nDiN > a > .items_nav-button-icon__HAT1i').click();

        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiBadge-root > .items_nav-button-icon-container__8nDiN > a > .items_nav-button-icon__HAT1i').click();
        cy.get('[style="font-size: 14px; color: rgb(249, 55, 0); font-family: IBM, plex-serif;"]').click()
        cy.get('.mui-j28bcm > a > .MuiAvatar-root').click()
        cy.get('.mui-ausjyk > .MuiGrid-container > .MuiGrid-grid-xs-4').click()
        cy.log("saved posts")
        cy.get(':nth-child(3) > .MuiGrid-container > .MuiGrid-grid-xs-4').click()
        cy.log("Comments")
        cy.get(':nth-child(4) > .MuiGrid-container > .MuiGrid-grid-xs-4').click()
        cy.log("Likes ")
        cy.wait(4000)
        // cy.go("back")

    });
    it('Login Form Submission', () => {

    });


});