describe('Sağ kenar çubuğunun içeriğini doğrular', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.wait(3000);
        cy.url().should('eq', 'https://test.dudullu.com/');
        cy.wait(3000);
        cy.log('Siteye başarıyla ziyaret edildi');
    });

    it('Reklama Basildi', () => {
        cy.get('.rightbar_main-container__1QJDx > .MuiBox-root > img').should('exist').then(() => {
            cy.log("Reklama basildi");
        });
    });

    it('"Yardım" sayfasına yönlendirilir', () => {
        cy.get(':nth-child(1) > .rightbar_nav-list-link__TNC4f').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kullanim-klavuzu');
    });

    it('"Geribildirim" sayfasına yönlendirilir', () => {
        cy.get(':nth-child(2) > .rightbar_nav-list-link__TNC4f').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/iletisim');
    });

    it('"Kullanım Şartları" sayfasına yönlendirilir', () => {
        cy.get(':nth-child(3) > .rightbar_nav-list-link__TNC4f').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kullanim-sozlesmesi');
    });

    it('"Daha fazla göster..." sayfasına yönlendirilir', () => {
        cy.get(':nth-child(4) > .rightbar_nav-list-link__TNC4f').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kurallar');
    });

    it('Telif hakkı bilgisini kontrol eder', () => {
        cy.get('.rightbar_nav-list___XUNP > :nth-child(5)').should('contain.text', '©2024 Dudullu.com - Tüm Hakları Saklıdır.');
    });
});
