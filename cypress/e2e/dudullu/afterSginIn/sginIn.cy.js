describe('SginIn Page  Testi  ', () => {

    beforeEach(() => {
        // Sayfayı ziyaret et veya HTML içeriğini sağ kenar çubuğuyla yükle
        cy.visit('/');
        cy.url().should('eq', 'https://test.dudullu.com/');
        // Başlık metnini kontrol et
        cy.get('.justify-center > .MuiTypography-root').should('be.visible');

        // Siteye başarıyla ziyaret edildi mesajını logla
        cy.log('Siteye başarıyla ziyaret edildi');
    });
    it('should ', () => {
        cy.get('.MuiGrid-root > [href="/login"] > .items_login-button__A_iPm > span').click().should('be.visible')
        cy.get('#username').type('testingkullnici') // Kullanıcı adınızı gerçek kullanıcı adıyla değiştirin
        cy.get('#password').type('BilalSYR2002.') // Şifrenizi gerçek şifreyle değiştirin
        cy.get('.login-form_input-icon-container__igOlA > img').click()
        cy.get('.login-form_submit-button__QmMj9').click().should('be.visible');
cy.wait(2000)
        cy.go(-1)
        

    });




    it('Üyelik ve gizlilik sözleşmesi bağlantılarını doğrular', () => {
        // Üyelik ve gizlilik sözleşmesi bağlantılarının varlığını ve renklerini kontrol et
        cy.get('.MuiGrid-root > [href="/login"] > .items_login-button__A_iPm').click()
        cy.get('.login-form_remember-me-label__3CTEb')
            .find('a')
            .should('have.length', 2) // İki bağlantının olduğunu doğrular
            .each(($link) => {
                cy.wrap($link)
                    .should('have.attr', 'href') // Href özelliğini kontrol eder
                    .and('include', '/yardim-merkezi/'); // Doğru bağlantıya işaret edip etmediğini kontrol eder
                cy.wrap($link)
                    .should('have.css', 'color', 'rgb(31, 231, 231)'); // Doğru renkte olduğunu kontrol eder
            });
        cy.get('.login-form_remember-container__ESLKh > div > input').click()
        cy.get(':nth-child(1) > .login-form_social-media-button__NqMSP > img').click().should('be.visible')
        cy.visit('/login')
        cy.get('.login-form_remember-container__ESLKh > div > input').click()

        cy.get(':nth-child(2) > .login-form_social-media-button__NqMSP > img').click().should('be.visible')
        cy.visit('/login')

        cy.get('.login-form_account-question-link__fsstW').click().should('be.visible')
        cy.visit('/login')

        cy.get('.login-form_account-question-link__fsstW').click().should('be.visible')
        cy.visit('/login')
        cy.get('.login-form_footer-logo-frame__2NTf7 > img').click().should('be.visible')

    });
    it.only('should ', () => {
        cy.get('.MuiGrid-root > [href="/login"] > .items_login-button__A_iPm > span').click().should('be.visible')
        cy.get('#username').type('testingkullnici') // Kullanıcı adınızı gerçek kullanıcı adıyla değiştirin
        cy.get('#password').type('BilalSYR2002.') // Şifrenizi gerçek şifreyle değiştirin
        cy.get('.login-form_input-icon-container__igOlA > img').click()
        cy.get('.login-form_submit-button__QmMj9').click().should('be.visible');
        cy.wait(2000)
        cy.go(-1)
        cy.visit('/')
        cy.get(':nth-child(3) > .MuiCardContent-root > a > .MuiStack-root > .mui-55v1pp').click().should('be.visible')
        cy.get('.mui-1itom5a > :nth-child(1) > .MuiTypography-root').click().should('be.visible')
        cy.wait(3000)
        cy.get('[style="display: flex; flex-direction: row; gap: 5px;"] > :nth-child(1)').click().should('be.visible')
       cy.wait(2000)
        cy.get('[style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 9999; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center;"]').click()
        cy.get(':nth-child(157) > b').click().should('exist')
    });


});