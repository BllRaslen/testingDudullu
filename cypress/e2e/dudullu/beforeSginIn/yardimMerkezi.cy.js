describe('Yardim Merkezi ', () => {
    beforeEach(() => {
        cy.visit('https://test.dudullu.com/yardim-merkezi/cerezler')
    });

    it('should navigate to "Kullanım Klavuzu" page', () => {
        cy.get('[href="/yardim-merkezi/kullanim-klavuzu"] > .MuiGrid-grid-xs-12 > .MuiGrid-container').click()
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kullanim-klavuzu');
        cy.log('Kullanım Klavuzu sayfasına başarıyla yönlendirildi.');
    });

    it('should navigate to "Kullanım Sözleşmesi" page', () => {
        cy.get('[href="/yardim-merkezi/kullanim-sozlesmesi"] > .MuiGrid-grid-xs-12').click()
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kullanim-sozlesmesi');
        cy.log('Kullanım Sözleşmesi sayfasına başarıyla yönlendirildi.');
    });

    it('should navigate to "Kurallar" page', () => {
        cy.get('[href="/yardim-merkezi/kurallar"] > .MuiGrid-grid-xs-12 > .MuiGrid-container').click()
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/kurallar');
        cy.log('Kurallar sayfasına başarıyla yönlendirildi.');
    });

    it('should navigate to "Gizlilik Sözleşmesi" page', () => {
        cy.get('[href="/yardim-merkezi/gizlilik-sozlesmesi"] > .MuiGrid-grid-xs-12').click()
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/gizlilik-sozlesmesi');
        cy.log('Gizlilik Sözleşmesi sayfasına başarıyla yönlendirildi.');
    });

    it('should navigate to "Web Erişilebilirlik Bildirimi" page', () => {
        cy.get('[href="/yardim-merkezi/web-erisilebilirlik-bildirimi"] > .MuiGrid-grid-xs-12 > .MuiGrid-container').click()
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/web-erisilebilirlik-bildirimi');
        cy.log('Web Erişilebilirlik Bildirimi sayfasına başarıyla yönlendirildi.');
    });

    it('should navigate to "Çerezler" page', () => {
        cy.get('[href="/yardim-merkezi/cerezler"] > .MuiGrid-grid-xs-12 > .MuiGrid-container').click()
        cy.url().should('eq', 'https://test.dudullu.com/yardim-merkezi/cerezler');
        cy.log('Çerezler sayfasına başarıyla yönlendirildi.');
    });
});
