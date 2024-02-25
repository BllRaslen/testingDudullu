describe('Web sayfası testi', () => {

    it('Logo, butonlar ve metin kutularının varlığını kontrol et', () => {
        // Ana sayfaya git
        cy.visit('/');
        // URL'nin doğru olduğunu kontrol et
        cy.url().should('eq', 'https://test.dudullu.com/');
        // Başlık metnini kontrol et
        cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Siteye başarıyla ziyaret etti yapıldı mesajını logla
        cy.log('Siteye başarıyla ziyaret etti');

        // Logo'nun varlığını kontrol et
        cy.get('.items_logoContainer__FMZvC > img')
            .should('be.visible');
        // Logo mevcut mesajını logla
        cy.log('Logo Mevcut ve Linkini Çalışıyor');

        // Arama çubuğunu kontrol et
        //'TRT HABER Sitesinde İstediğiniz konu başlığını yazın'
        const searchTerm = 'TRTHABER';
        cy.get('.search-bar_input__dKQlN')
            .type(searchTerm)
            .get('.search-bar_icon-container__zIMho > img')
            .click()
            .should('be.visible');

        // SVG öğesinin varlığını kontrol et
        cy.get('svg[stroke="currentColor"][fill="currentColor"][viewBox="0 0 24 24"]').should('be.visible');
        cy.log('Konular mevcuttur');

        // SVG öğesinin varlığını kontrol et
        cy.get('svg[stroke="currentColor"][fill="none"][viewBox="0 0 24 24"]').should('be.visible');
        cy.log('yazarlar Mevcuttur');

        // Giriş butonunu kontrol et
        cy.get('.MuiGrid-root > [href="/login"] > .items_login-button__A_iPm')
            .should('be.visible')
            .and('contain', 'Giriş');

        // Kayıt ol butonunu kontrol et
        cy.get('.MuiGrid-root > [href="/register"] > .items_register-button__RHrGL > span')
            .should('be.visible')
            .and('contain', 'Kayıt Ol');
    });
});
