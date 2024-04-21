describe('Sağ kenar çubuğunun içeriğini doğrular', () => {
    beforeEach(() => {
        // Visit the page
        cy.visit('/');
        // Assert the URL is correct
        cy.url().should('eq', 'https://test.dudullu.com/');
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiStack-root').click()
    });



    it('Kullanıcının fotografına tıklanabilir', () => {

        cy.get('.MuiGrid-grid-sm-1 > a > .MuiAvatar-root').click();
        cy.log("Kullanıcının profil resmine tıklandı!");
        cy.go("back");
    });

    it('Kullanıcının ismine tıklanabilir', () => {
        cy.get('.mui-11aco7o').click();
        cy.log("Kullanıcının '+' ikonuna tıklandı");
        cy.go("back");
    });

    it('Kullanıcının kullanıcı adına tıklanabilir', () => {
        cy.get('.mui-1db89tq').click();
        cy.log("Kullanıcının kullanıcı adına tıklandı!");
        cy.go("back");
    });

    it('Kullanıcının '+' ikonuna basmak', () => {
        cy.get('.MuiGrid-grid-sm-2 > img').click();
        cy.log("Kullanıcının kullanıcı adına tıklandı!");

    });

    it('geri butununa basmak', () => {
        cy.get('.MuiGrid-grid-sm-2 > .MuiGrid-root').click();
        cy.log("ana sayifaya gitti ");
        cy.go("back");
    });

    it('Icons and Buttons ', () => {
        cy.get('[src="/_next/static/media/share.a9e4d6e8.svg"]').click().log("share butununa basildi ")
        cy.get('[src="/_next/static/media/save.f1711337.svg"]').click().log("save butonuna basildi ")
        cy.get('[src="/_next/static/media/notification.9ad02246.svg"]').click().log("alert butununa basildi ")
        cy.get('.mui-krvb8k').log("arti bir goruntu")
        cy.get('.mui-o0rlmm > .MuiButtonBase-root').click().log("like butununa basildi ")
        cy.wait(3000)

    });
    it('comment part', () => {
        cy.get('.new-comment_input-container__HXHc_').click();
        cy.url().should('eq', 'https://test.dudullu.com/login');
        cy.log("comment yazmak icin sgin in yapmalisin ");
        cy.get('#username').type('testingkullnici')
        cy.get('#password').type('BilalSYR2002.')
        cy.get('.login-form_submit-button__QmMj9').click()
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiStack-root > a > .MuiGrid-root').click()
        cy.get('.new-comment_input-container__HXHc_').click();
        cy.get('#username').type('testingkullnici')
        cy.get('#password').type('BilalSYR2002.')
        cy.get('.login-form_submit-button__QmMj9').click()
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiStack-root > a > .MuiGrid-root').click()
        cy.get('.new-comment_input-container__HXHc_').click();
        cy.get('.p-2').type("yineden Merhaba ")
        cy.get('.flex > .MuiButtonBase-root').click()
        cy.log("Comment gonderildi! ");


    });



// Ensure the main title is visible
    //     cy.get('.justify-center > .MuiTypography-root').should('be.visible');
    //
    //     // Log a success message after visiting the site
    //     cy.log('Siteye başarıyla ziyaret edildi');
    //
    //     // Click on the link to the "Yardım" page and assert redirection
    //     cy.get(':nth-child(1) > .MuiCardContent-root > a > .MuiStack-root > .mui-55v1pp')
    //         .click()
    //         .log('Yardım sayfasına yönlendirildi');
    //
    //     // Click on the anchor element
    //     cy.get('.mui-15j76c0 > a').click();
    //
    //     // Ensure the anchor redirects to the expected page and is visible
    //     cy.get('.mui-117da3q > .MuiGrid-root > span').should('be.visible').click()
    //     cy.wait(2000)
    //     // Click on other elements if needed
    //     cy.get('.mui-1yheuv > span').click()
    //
    //     cy.get(':nth-child(3) > a > .MuiBox-root').click()
    //     cy.get('.login-form_title__wTwpJ').should('be.visible')
    //     cy.go(-1)
    //    // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Fcontent').log('Calisiyor');
    //   //   cy.go(-1);
    //
    //     cy.get(':nth-child(2) > a > .MuiBox-root').click()
    //     // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2FFollow-up').log('Calisiyor');
    //     // cy.go(-1);
    //
    //     cy.get(':nth-child(1) > a > .MuiBox-root').click()
    //     // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Follows').log('Calisiyor');
    //     // cy.go(-1);
    //
    //     cy.get(':nth-child(4) > a > .MuiBox-root').click()
    //     // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Ftaste').log('Calisiyor');
    //     // cy.go(-1);
    //
    //     cy.get(':nth-child(5) > a > .MuiBox-root').click()
    //     // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2Fimpression').log('Calisiyor');
    //     // cy.go(-1);
    //
    //     cy.get(':nth-child(6) > a > .MuiBox-root').click()
    //     // cy.url().should('eq', 'https://test.dudullu.com/login?callbackUrl=https%3A%2F%2Ftest.dudullu.com%2Faccount%2FHaber%2520Hatt%25C4%25B1%2comment').log('Calisiyor');
    //     // cy.go(-1);
    //     cy.get(':nth-child(1) > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root > [data-testid="MoreVertIcon"]').click().log('Üç noktalı menü çalışıyor');
    //
    //
    //     cy.get(':nth-child(1) > .MuiCardActions-root > .MuiGrid-container > .MuiGrid-grid-lg-6 > .MuiButtonBase-root').click()
    //     cy.url().should('eq', 'https://test.dudullu.com/login');
    //     cy.log('liked ');
    //     cy.wait(3000)
    //     cy.go(-1)
    //     cy.get(':nth-child(1) > .MuiCardActions-root > .MuiGrid-container > .MuiGrid-grid-lg-6 > [style="padding: 4px 8px; margin: 4px; border-radius: 8px;"]').click()
    //     //
    //
    //     cy.url().should('not.eq', 'https://test.dudullu.com/login');
    //     cy.wait(3000)
    //     cy.go(-1)
    //
    //
    // });
});


