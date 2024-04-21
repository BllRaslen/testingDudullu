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

        cy.get('[href="/account/testingkullnici/dashboard"] > .items_customdiv__DE4re').click()
        cy.log("clicked to panel")


        cy.get('.MuiGrid-container > :nth-child(1) > .MuiBox-root').click()
        cy.get(':nth-child(2) > .MuiBox-root').click()
        cy.get('a > .MuiBox-root').click()


        cy.get(':nth-child(4) > .MuiBox-root').click()
        cy.get(':nth-child(5) > .MuiBox-root').click()
        cy.get(':nth-child(6) > .MuiBox-root').click()


    });
});