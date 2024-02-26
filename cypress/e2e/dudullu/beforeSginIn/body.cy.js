describe('Popüler Kategoriler Testi', () => {
    it('Butonların varlığını kontrol et', () => {
        // Ana sayfaya git
        cy.visit('/');
        // URL'nin doğru olduğunu kontrol et
        cy.url().should('eq', 'https://test.dudullu.com/');
        // Başlık metnini kontrol et
        cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Siteye başarıyla ziyaret edildi mesajını logla
        cy.log('Siteye başarıyla ziyaret edildi');

        // Popüler kategoriler divinin varlığını kontrol et
        cy.get('.populer-category_slider__CrI9_')
            .should('be.visible');

        // Geri butonunu kontrol et
        cy.get('[data-testid="ArrowBackIosIcon"]')
            .should('be.visible');

        // İleri butonunu kontrol et
        cy.get('[data-testid="ArrowForwardIosIcon"]')
            .should('be.visible');

        // Kategori butonlarını kontrol et
        cy.get('.populer-category_slider__CrI9_ button')
            .should('have.length', 4) // Toplam 4 kategori butonu olduğunu kontrol et
            .each(($button) => {
                cy.wrap($button)
                    .should('be.visible');
            });
    });

    it('İlgili içeriklerin varlığını kontrol et', () => {
        // Sayfayı ziyaret et
        cy.visit('/');

        // İlgili kategoriye tıkla ve içeriklerin varlığını kontrol et
        cy.get('.populer-category_slider__CrI9_ > :nth-child(2)')
            .click()
            .should('be.visible')
            .log('Kategorilere tıklandı');

        cy.contains('En Çok Görüntülenen İçerikler')
            .should('be.visible');

        // İçeriklerin listesini kontrol et
        cy.get(':nth-child(1) > .leftbar_topic-card-link__tSUXA > .leftbar_topic-card-content-container__Qqv5b > .leftbar_topic-card-title__1fTZo').click()
            .log('Sol çubuk çalışıyor');

        cy.visit('/');

        cy.get('.leftbar_topic-card-container__pMWV0')
            .should('have.length', 6)
            .each(($card) => {
                cy.wrap($card)
                    .should('be.visible');
            });
    });

    it('İçerik oluşturma bileşenini kontrol et', () => {
        // Ana sayfaya git
        cy.visit('/');

        // İçerik oluşturma butonunu tıkla ve giriş sayfasına yönlendirildiğini kontrol et
        cy.get('.new-content_new-wordy-input__v4mkE').click().log('Çalışıyor');
        cy.url().should('eq', 'https://test.dudullu.com/login').log('Çalışıyor');
        cy.wait(2000);
        cy.visit('/').log('Ana sayfaya dönüldü');
    });

    it('SVG ikon özelliklerini doğrular', () => {
        // Sayfayı ziyaret et
        cy.visit('/');

        // SVG ikon öğesinin varlığını doğrula
        cy.get(':nth-child(1) > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root > [data-testid="MoreVertIcon"]').click().log('Üç noktalı menü çalışıyor');

        cy.get(':nth-child(1) > .MuiCardContent-root').click().log('Makalenin linki çalışıyor');
    });

    /* cy.get('#username').type('testingkullnici') // Replace 'your_username' with the actual username
      cy.get('#password').type('BilalSYR2002.') // Replace 'your_password' with the actual password
      cy.get('.login-form_submit-button__QmMj9').click()
      cy.get('#basic-button > .MuiAvatar-root').click()
      cy.get('.MuiList-root > :nth-child(7)').click().log('Cikis yapildi! ')*/
});
