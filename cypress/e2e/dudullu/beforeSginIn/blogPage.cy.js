describe('Sağ kenar çubuğunun içeriğini doğrular', () => {
    it('"Yardım" sayfasına yönlendirilir', () => {
        // Visit the page
        cy.visit('/');

        // Assert the URL is correct
        cy.url().should('eq', 'https://test.dudullu.com/');

        // Ensure the main title is visible
        cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Log a success message after visiting the site
        cy.log('Siteye başarıyla ziyaret edildi');

        // Click on the link to the "Yardım" page and assert redirection
        cy.get(':nth-child(1) > .MuiCardContent-root > a > .MuiStack-root > .mui-55v1pp')
            .click()
            .log('Yardım sayfasına yönlendirildi');

        // Click on the anchor element
        cy.get('.mui-15j76c0 > a').click();

        // Ensure the anchor redirects to the expected page and is visible
        cy.get('.mui-117da3q > .MuiGrid-root > span').should('be.visible').click()
        cy.wait(2000)
        // Click on other elements if needed
        cy.get('.mui-1yheuv > span').click()

        cy.get(':nth-child(3) > a > .MuiBox-root').click()
        cy.get('.login-form_title__wTwpJ').should('be.visible')
        cy.go(-1)
       // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Fcontent').log('Calisiyor');
      //   cy.go(-1);

        cy.get(':nth-child(2) > a > .MuiBox-root').click()
        // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2FFollow-up').log('Calisiyor');
        // cy.go(-1);

        cy.get(':nth-child(1) > a > .MuiBox-root').click()
        // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Follows').log('Calisiyor');
        // cy.go(-1);

        cy.get(':nth-child(4) > a > .MuiBox-root').click()
        // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Ftaste').log('Calisiyor');
        // cy.go(-1);

        cy.get(':nth-child(5) > a > .MuiBox-root').click()
        // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Fimpression').log('Calisiyor');
        // cy.go(-1);

        cy.get(':nth-child(6) > a > .MuiBox-root').click()
        // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2comment').log('Calisiyor');
        // cy.go(-1);
        cy.get(':nth-child(1) > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root > [data-testid="MoreVertIcon"]').click().log('Üç noktalı menü çalışıyor');


        cy.get(':nth-child(1) > .MuiCardActions-root > .MuiGrid-container > .MuiGrid-grid-lg-6 > .MuiButtonBase-root').click()
        cy.url().should('eq', 'https://test.dudullu.com/login');
        cy.log('liked ');
        cy.wait(3000)
        cy.go(-1)
        cy.get(':nth-child(1) > .MuiCardActions-root > .MuiGrid-container > .MuiGrid-grid-lg-6 > [style="padding: 4px 8px; margin: 4px; border-radius: 8px;"]').click()
        //

        cy.url().should('not.eq', 'https://test.dudullu.com/login');
        cy.wait(3000)
        cy.go(-1)


    });
});


