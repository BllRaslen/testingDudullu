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
       
        cy.go("back")

    });





});
