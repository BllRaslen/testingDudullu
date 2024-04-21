describe('Popüler Kategoriler Testi', () => {
    beforeEach(() => {
        // Sayfayı ziyaret et veya HTML içeriğini sağ kenar çubuğuyla yükle
        cy.visit('/');
        cy.url().should('eq', 'https://test.dudullu.com/');
        // Başlık metnini kontrol et
       // cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Siteye başarıyla ziyaret edildi mesajını logla
        cy.log('Siteye başarıyla ziyaret edildi');
    });
    it('Butonların varlığını kontrol et', () => {
        cy.visit('/');
        cy.contains('En Çok Görüntülenen İçerikler')
            .should('be.visible');
        cy.get(':nth-child(2) > .leftbar_topic-card-link__tSUXA > .leftbar_topic-card-content-container__Qqv5b > .leftbar_topic-card-title__1fTZo').click()
        cy.log("En Çok Görüntülenen İçerikler Calisiyor ve mevcuttur ")
    });

    it('Sol Reklama Basmak testi', () => {
        cy.get('.MuiStack-root > .MuiBox-root > img').click()
        cy.log("Reklama Basildi ")
    });

    it('  Popüler Etiketler testi', () => {
        cy.get('[href="/tag/Vestibulum"] > .font-light').click()
        cy.url().should('eq', 'https://test.dudullu.com/tag/Vestibulum');
        cy.wait(5000)
        cy.log("Reklama Basildi ")
    });

    it('Icerik Olusturun Test!  ', () => {
        cy.get('.new-content_input-container__L0ZV8').click()
        cy.url().should('eq', 'https://test.dudullu.com/login');
        cy.wait(5000)
        cy.log("Icerik Olusturmak icin Sgin in yapmalisin  ")
    });
    it('Kullanicinin fotografina basmak  ', () => {
        cy.get(':nth-child(3) > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root > .mui-v3z1wi > .MuiGrid-grid-xs-5 > .hover\\:text-2xl > .MuiGrid-container > .MuiStack-root > h1').click();
        cy.log("Kullanıcının profil resmine tıklandı!");
        cy.go("back");
    });


    it('Kullanicinin "+" iconuna basmak  ', () => {
        cy.get(':nth-child(3) > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root > .mui-v3z1wi > .MuiGrid-grid-xs-5 > .hover\\:text-2xl > .MuiGrid-container > .MuiStack-root > img').click();
        cy.log("Kullanıcının '+' ikonuna tıklandı");
        cy.go("back");
    });

    it('Kullanicinin usernamena basmak ', () => {
        cy.get(':nth-child(3) > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root > .mui-v3z1wi > .MuiGrid-grid-xs-5 > .hover\\:text-2xl > .MuiGrid-container > .MuiGrid-root > h1').click();
        cy.log("Kullanıcının kullanıcı adına tıklandı!");
        cy.go("back");
    });
    it('posta basmak ', () => {

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiStack-root > a > .MuiGrid-root').click();
        cy.log("Posta girildi! ");
        cy.go("back");
    });


    it('Like Buttona basmak !  ', () => {
        cy.get(':nth-child(3) > .MuiCardActions-root > .mui-h40hd4 > .mui-v3z1wi > .MuiGrid-grid-xs-5 > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click()
        cy.url().should('eq', 'https://test.dudullu.com/login');
        cy.wait(2000)
        cy.log("Like Buttona basildi  ")
        cy.go('back')
    });
    it('Comment Buttona basmak !  ', () => {
        cy.get(':nth-child(3) > .MuiCardActions-root > .mui-h40hd4 > .mui-v3z1wi > .MuiGrid-grid-xs-5 > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root').click()
        cy.url().should('eq', 'https://test.dudullu.com/login');
        cy.wait(2000)
        cy.log("Comment  Buttona basildi  ")
        cy.go('back')
    });
    it('postun fotografina basmak !  ', () => {
        cy.get(':nth-child(3) > .MuiCardActions-root > .mui-h40hd4 > .mui-16hg20b > div > img').click()

        cy.wait(2000)
        cy.log("postun fotografina basildi  ")
        cy.go('back')
    });
    it('Ortadaki Reklama basmak  !  ', () => {
        cy.get('.flex > :nth-child(1) > .mui-hgm688 > img').click()

        cy.wait(2000)
        cy.log("Ortadaki Reklama basildi  ")
        cy.go('back')
    });








    /* cy.get('#username').type('testingkullnici')
      cy.get('#password').type('BilalSYR2002.')
      cy.get('.login-form_submit-button__QmMj9').click()
      cy.get('#basic-button > .MuiAvatar-root').click()
      cy.get('.MuiList-root > :nth-child(7)').click().log('Cikis yapildi! ')*/
});
