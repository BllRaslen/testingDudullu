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
        cy.log("clicked to panel.cy.js")

        cy.go("back")
        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.log("clicked to user photo")

        cy.get(':nth-child(7) > .items_customdiv__DE4re > .MuiTypography-root').click()
        cy.log("clicked to profile")
        cy.go("back")
        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.log("clicked to user photo")

        cy.get('[href="/account/testingkullnici/wallet"] > .items_customdiv__DE4re > .MuiTypography-root').click()
        cy.log("clicked to cuzdan")
        cy.go("back")
        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.log("clicked to user photo")

        cy.get('[href="/account/testingkullnici/payment"] > .items_customdiv__DE4re').click()
        cy.log("clicked to odeme")
        cy.go("back")
        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.log("clicked to user photo")

        cy.get(':nth-child(7) > .items_customdiv__DE4re').click()
        cy.log("clicked to profile Ayarlari")
        cy.go("back")
        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.log("clicked to user photo")

        cy.get('[href="/account/testingkullnici/settings"] > .items_customdiv__DE4re').click()
        cy.log("clicked to hesap Ayarlari")
        cy.go("back")
        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.log("clicked to user photo")

        cy.get('[href="/yardim-merkezi/kullanim-klavuzu"] > .items_customdiv__DE4re').click()
        cy.log("clicked to yardim ")
        cy.go("back")


        cy.get('button > .items_customdiv__DE4re').click()
        cy.log("clicked to cikis")
        cy.go("back")







    });

});
