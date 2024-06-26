describe('Comment Kismini test et ', () => {

    beforeEach(() => {
        // Sayfayı ziyaret et veya HTML içeriğini sağ kenar çubuğuyla yükle
        cy.visit('/');
        cy.url().should('eq', 'https://test.dudullu.com/');
        cy.visit('/login')
        cy.get('#username').type('testingkullnici')
        cy.get('#password').type('BilalSYR2002.')
        cy.get('.login-form_submit-button__QmMj9').click().should('be.visible');
        // Başlık metnini kontrol et
       // cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Siteye başarıyla ziyaret edildi mesajını logla
        cy.log('Siteye başarıyla ziyaret edildi');
    });

    it('Comment after sgin in ', () => {
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiStack-root > a > .MuiGrid-root').click()
        cy.log('Merhaba! Yorumlarınızı bekliyorum.');
        cy.get('.new-comment_new-wordy-input__00IUy').click().type('Merhaba ');
        cy.get('#username').type('testingkullnici')
        cy.get('#password').type('BilalSYR2002.')
        cy.get('.login-form_submit-button__QmMj9').click().should('be.visible');
cy.wait(2000)
      //  cy.get(':nth-child(1) > .MuiCardContent-root > .MuiStack-root > .mui-55v1pp').click().should('be.visible');
        //cy.wait(2000);
        cy.log('Merhaba! Yorumlarınızı bekliyorum!');
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiStack-root > a > .MuiGrid-root').click();
        cy.get('.new-comment_new-wordy-input__00IUy').click()
        cy.get('.p-2').click().type("commented by Cypress")
        cy.get('.flex > .MuiButtonBase-root').click()
        cy.get('.MuiGrid-grid-sm-2 > .MuiGrid-root').click()

        
        // cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root > [data-testid="MoreVertIcon"]').click().should('be.visible');
        //
        // // Yorumlarda etiketleri kontrol et
        // cy.get('.MuiCardContent-root').find('p.MuiTypography-body1').each(($el) => {
        //     const text = $el.text();
        //     if (text.includes('#')) {
        //         cy.wrap($el).click().should('be.visible');
        //     }
        // });
    });
});
