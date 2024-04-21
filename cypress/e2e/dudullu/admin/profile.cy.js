describe('Login', () => {
    beforeEach(() => {
        // Sayfayı ziyaret et veya HTML içeriğini sağ kenar çubuğuyla yükle
        cy.visit('/');
        cy.url().should('eq', 'https://test.dudullu.com/');
        cy.visit('/login')
        cy.get('#username').type('testingkullnici')
        cy.get('#password').type('BilalSYR2002.')
        cy.get('.login-form_submit-button__QmMj9').click();

        cy.log('Siteye başarıyla ziyaret edildi');
    });
    it('should contain navigation links', () => {
        cy.wait(3000)
        cy.get(':nth-child(3) > #basic-button > .MuiAvatar-root').click()
        cy.get('[href="/login"] > .items_customdiv__DE4re').click()
        cy.get('#username').type('testingkullnici')
        cy.get('#password').type('BilalSYR2002.')
        cy.get('.login-form_submit-button__QmMj9').click().should('be.visible');
        cy.wait(2000)

        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.log("clicked to user photo")

        cy.get(':nth-child(4) > .items_customdiv__DE4re > .MuiTypography-root').click()
        cy.log("clicked to profile")

        cy.get('.MuiGrid-grid-xs-12 > button').click()
        cy.get(':nth-child(2) > .MuiGrid-grid-xs-9 > .middlebar_input__sgPJ0').click()
        cy.get(':nth-child(4) > .MuiGrid-grid-xs-9 > .middlebar_input__sgPJ0').click()
        cy.get(':nth-child(5) > .MuiGrid-grid-xs-9 > .middlebar_input__sgPJ0').click()
        cy.get(':nth-child(6) > .MuiGrid-grid-xs-9 > .middlebar_input__sgPJ0').click()
        cy.get(':nth-child(7) > .MuiGrid-grid-xs-9 > .middlebar_input__sgPJ0').click()
        cy.get(':nth-child(8) > .MuiGrid-grid-xs-9 > .middlebar_input__sgPJ0').click()
        cy.get('[type="submit"]').click()
        cy.log("its work")
    });
});