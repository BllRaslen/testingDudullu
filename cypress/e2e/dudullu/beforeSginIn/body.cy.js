describe('Popüler Kategoriler Testi', () => {
    it('Butonların varlığını kontrol et', () => {
        cy.visit('/');
        // URL'nin doğru olduğunu kontrol et
        cy.url().should('eq', 'https://test.dudullu.com/');
        // Başlık metnini kontrol et
        cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Siteye başarıyla ziyaret etti yapıldı mesajını logla
        cy.log('Siteye başarıyla ziyaret etti');

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
});

    it('İlgili içeriklerin varlığını kontrol et', () => {
        // Sayfayı ziyaret et
        cy.visit('/');



        cy.get('.populer-category_slider__CrI9_ > :nth-child(2)')
            .click()
            .should('be.visible')
            .log('categoryler vardir! ')

        cy.contains('En Çok Görüntülenen İçerikler')
            .should('be.visible');

        cy.get(':nth-child(1) > .leftbar_topic-card-link__tSUXA > .leftbar_topic-card-content-container__Qqv5b > .leftbar_topic-card-title__1fTZo').click()
        .log('left bar calisisyor ')
        cy.visit('/');

        cy.get('.leftbar_topic-card-container__pMWV0')
            .should('have.length', 6)
            .each(($card) => {
                cy.wrap($card)
                    .should('be.visible');
            });
    });

    it.only('İçerik oluşturma bileşenini kontrol et', () => {
        cy.visit('/');
        cy.get('.new-content_new-wordy-input__v4mkE').click().log('calisiyor')
        cy.url().should('eq', 'https://test.dudullu.com/login');
        cy.get('#username').type('testingkullnici') // Replace 'your_username' with the actual username
        cy.get('#password').type('BilalSYR2002.') // Replace 'your_password' with the actual password
        cy.get('.login-form_submit-button__QmMj9').click()
        cy.get('#basic-button > .MuiAvatar-root').click()
        cy.get('.MuiList-root > :nth-child(7)').click().log('Cikis yapildi! ')

    });cy.visit('/')


    it('Verifies the SVG icon attributes', () => {
        // Visit the page or load the HTML content with the SVG icon
        cy.visit('https://test.dudullu.com/');

        // Assert the presence of the SVG icon element
        cy.get(':nth-child(1) > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root > [data-testid="MoreVertIcon"]').click();
        cy.get(':nth-child(1) > .MuiCardContent-root').click();
        cy.get(':nth-child(1) > .MuiCardContent-root').click();
    });

    it('Verifies the buttons and SVG icons', () => {
        // Visit the page or load the HTML content with the buttons and SVG icons
        cy.visit('https://test.dudullu.com/');

        // Verify the first button and its SVG icon
        cy.get('.MuiGrid-root .MuiSvgIcon-root').eq(0).should('exist');
        cy.get('.MuiGrid-root button').eq(0).should('have.attr', 'style', 'padding: 4px 8px; margin: 4px; background-color: rgb(249, 249, 249); border-radius: 8px;');
        cy.get('.MuiGrid-root button').eq(0).should('contain', 'Beğen');

        // Verify the second button and its SVG icon
        cy.get('.MuiGrid-root .MuiSvgIcon-root').eq(1).should('exist');
        cy.get('.MuiGrid-root button').eq(1).should('have.attr', 'style', 'padding: 4px 8px; margin: 4px; border-radius: 8px;');
        cy.get('.MuiGrid-root button').eq(1).should('contain', 'Yorum');

        // You can add more assertions as needed based on your test requirements
    });

    it('Verifies the content of the right sidebar', () => {
        // Visit the page or load the HTML content with the right sidebar
        cy.visit('https://test.dudullu.com/');

        // Verify the button
        cy.get('.rightbar_button__BA4Pb').click()
        cy.wait(2000)
        cy.visit('https://test.dudullu.com/');

        cy.wait(2000)
        cy.get('.rightbar_button__BA4Pb span').should('have.text', 'Kayıt Ol');

        // Verify the footer links
        cy.get('.rightbar_footer-nav__8X5zk').within(() => {
            cy.get('.rightbar_nav-list-link__TNC4f').should('have.length', 4);
            cy.contains('Yardım').should('have.attr', 'href', '/yardim-merkezi/kullanim-klavuzu');
            cy.contains('Geribildirim').should('have.attr', 'href', '/yardim-merkezi/iletisim');
            cy.contains('Kullanım Şartları').should('have.attr', 'href', '/yardim-merkezi/kullanim-sozlesmesi');
            cy.contains('Daha fazla göster...').should('have.attr', 'href', '/yardim-merkezi/kurallar');
            cy.contains('©2024 Dudullu.com - Tüm Hakları Saklıdır.');
        });
});


