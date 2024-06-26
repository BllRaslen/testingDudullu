describe('Web sayfası testi', () => {
    it('Logo, butonlar ve metin kutularının varlığını kontrol et', () => {
        cy.visit('/');
        cy.wait(3000);
        cy.url().should('eq', 'https://test.dudullu.com/');
        cy.wait(3000);
        cy.get('.items_logoContainer__FMZvC > img').click().should('be.visible');
        cy.log('Siteye başarıyla ziyaret etti');
        cy.get('.items_logoContainer__FMZvC > img').should('be.visible');
        cy.log('Logo Mevcut ve Linkini Çalışıyor');
        const searchTerm = 'Test';
        cy.get('.search-bar_input__dKQlN')
            .type(searchTerm)
            .get('.search-bar_icon-container__zIMho > img')
            .click()
            .should('be.visible');
        cy.get('svg[stroke="currentColor"][fill="currentColor"][stroke-width="0"][viewBox="0 0 24 24"]').should('exist');
        cy.get('svg[stroke="currentColor"][fill="none"][stroke-width="0"][viewBox="0 0 24 24"]').should('exist');
        cy.visit('/');
    });

    it('Giriş butonunu kontrol et', () => {
        cy.visit('/');
        cy.get('.MuiGrid-root > [href="/login"] > .items_login-button__A_iPm')
            .should('be.visible')
            .click()
            .and('contain', 'Giriş');
    });

    it('Kayıt ol butonunu kontrol et', () => {
        cy.visit('/');
        cy.get('.MuiGrid-root > [href="/register"] > .items_register-button__RHrGL > span')
            .should('be.visible')
            .and('contain', 'Kayıt Ol');
    });

    it('+ iconuna tıklama', () => {
        cy.visit('/');
        cy.get(':nth-child(3) > #basic-button > .MuiAvatar-root').click();
        cy.log("+ iconuna basıldı ");
    });

    describe('Drawer Links Test', () => {
        it('Checks the presence and functionality of links in the drawer', () => {
            cy.visit('/'); // Visit the webpage where the drawer is present

            // Check the presence and functionality of the login link
            cy.get('a[href="/login"]').click();

            // Assert that the URL should contain '/login'
            cy.url().should('include', '/login');
            // Verify if the page navigated to the login page


            // Navigate back to the original page
            cy.go('back');

            // Check the presence and functionality of the register link
            cy.get('a[href="/register"]').click();
            cy.url().should('include', '/register');


            // Navigate back to the original page
            cy.go('back');

            // Check the presence and functionality of the help center link
            cy.get('a[href="/yardim-merkezi/kullanim-klavuzu"]').click();
            cy.url().should('include', '/yardim-merkezi/kullanim-klavuzu');
        });
    });


});
