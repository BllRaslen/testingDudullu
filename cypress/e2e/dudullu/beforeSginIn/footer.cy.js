describe('Sağ kenar çubuğunun içeriğini doğrular', () => {
    beforeEach(() => {
        // Sayfayı ziyaret et veya HTML içeriğini sağ kenar çubuğuyla yükle
        cy.visit('/');
        cy.url().should('eq', 'https://test.dudullu.com/');
        // Başlık metnini kontrol et
        cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Siteye başarıyla ziyaret edildi mesajını logla
        cy.log('Siteye başarıyla ziyaret edildi');
    });

    it('"Yardım" sayfasına yönlendirilir', () => {
        cy.get('.rightbar_nav-list-link__TNC4f[href="/yardim-merkezi/kullanim-klavuzu"]').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kullanim-klavuzu');
    });

    it('"Geribildirim" sayfasına yönlendirilir', () => {
        cy.get('.rightbar_nav-list-link__TNC4f[href="/yardim-merkezi/iletisim"]').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/iletisim');
    });

    it('"Kullanım Şartları" sayfasına yönlendirilir', () => {
        cy.get('.rightbar_nav-list-link__TNC4f[href="/yardim-merkezi/kullanim-sozlesmesi"]').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kullanim-sozlesmesi');
    });

    it('"Daha fazla göster..." sayfasına yönlendirilir', () => {
        cy.get('.rightbar_nav-list-link__TNC4f[href="/yardim-merkezi/kurallar"]').click();
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kurallar');
    });

    it('Telif hakkı bilgisini kontrol eder', () => {
        cy.get('.rightbar_nav-list___XUNP > :nth-child(5)').should('contain.text', '©2024 Dudullu.com - Tüm Hakları Saklıdır.');
    });
});
