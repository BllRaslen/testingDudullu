# Testing Dudullu Project 
# Cypress Kurulumu ve Temel Kullanım

Bu rehberde, Cypress test çerçevesini bilgisayarınıza nasıl kuracağınızı ve temel komutları nasıl kullanacağınızı adım adım öğreneceksiniz.

## Kurulum

1. Node.js'in bilgisayarınızda yüklü olduğundan emin olun. Node.js'i [resmi web sitesinden](https://nodejs.org/) indirebilir ve yükleyebilirsiniz.

2. Projenizin klasöründe bir terminal veya komut istemcisini açın.

3. Cypress'i projenize yüklemek için aşağıdaki komutu çalıştırın:

    ```
    npm install cypress --save-dev
    ```

4. Cypress başarıyla yüklendikten sonra, Cypress Test Runner'ı başlatmak için aşağıdaki komutu çalıştırın:

    ```
    npx cypress open
    ```

## Temel Kullanım

Cypress Test Runner başladığında, testleri çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Test Dosyalarını Seçme:** Test Runner açıldığında, projenizdeki test dosyalarını seçin.

2. **Testleri Çalıştırma:** Seçilen test dosyalarını çalıştırmak için dosyalara çift tıklayın veya "Run All Tests" düğmesine tıklayın.

3. **Test Sonuçlarını Görüntüleme:** Testlerinizi çalıştırdıktan sonra, her bir testin sonuçlarını ve çıktılarını görebilirsiniz.

## Örnek Test Senaryosu

Aşağıda, basit bir test senaryosunu içeren örnek bir Cypress test dosyası bulunmaktadır:

```javascript
describe('Örnek Test Senaryosu', () => {
    it('Ana Sayfa Başlığını Kontrol Etme', () => {
        cy.visit('https://test.dudullu.com/');
        cy.title().should('include', 'Example Domain');
    });
});

