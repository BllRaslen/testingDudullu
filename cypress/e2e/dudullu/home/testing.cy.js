

describe('siteye git ', () => {
  it('siteye gir ve habere git ', () => {
    cy.visit('/')
    cy.contains('TRTHABER - Babasının silahla rehin aldığı çocuk 12 saat sonunda kurtarıldı').click()
    cy.contains('Beğen').click()


  });
})


describe('giris yap', () => {
  it('username ve pass gir ', () => {
    cy.visit('https://test.dudullu.com/login') // Replace '/login' with the actual URL if needed

    cy.get('#username').type('testingkullnici') // Replace 'your_username' with the actual username

    cy.get('#password').type('BilalSYR2002.') // Replace 'your_password' with the actual password

    cy.get('.login-form_submit-button__QmMj9').click()

    cy.contains('Giriş').click()
  });
})



describe('TRT Haber Arama', () => {
  beforeEach(() => {
    cy.visit('https://test.dudullu.com/')
  })

  it('should search for a term', () => {


    const searchTerm = 'TRTHABER';
    cy.get('.search-bar_input__dKQlN')
        .type(searchTerm)
        .should('have.value', searchTerm);

    cy.wait(2000);

    cy.get('.MuiBox-root.css-dm3ywk').should('be.visible');

    cy.contains('TRTHABER - İsra').click()
    cy.wait(2000);
  });
});
describe('Check if the "+ Takip Et" button works', () => {
  beforeEach(() => {
    cy.visit('https://test.dudullu.com/content/Haber%20Hatt%C4%B1/424f542181b8e820f260ba7299f') // Replace 'https://example.com' with the actual URL of your page
  })

  it('should click the "+ Takip Et" button', () => {
    // Click the button
    cy.contains('+ Takip Et').click()

    // Optionally, you can add assertions to verify the expected behavior after clicking the button
    // For example, you can assert that some element appears or changes after clicking the button
    // cy.get('some-selector').should('be.visible')
  })
})


/*describe('Category Listing Test', () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://test.dudullu.com/')
  })

  it('should list all categories', () => {
    // Find the parent container of category buttons
    cy.get('.populer-category_slider__CrI9_')
        .find('button.font-light.font-mono')
        .should('have.length.gt', 0) // Ensure there are category buttons present
        .each(($button) => {
          // Iterate through each category button and assert its visibility
          cy.wrap($button).should('be.visible');
        });
  });
});

describe('tum haberlere begen', () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://test.dudullu.com/')
  })

  it('begen', () => {
    // Find all post containers
    cy.get('.MuiPaper-root.MuiCard-root')
        .should('have.length.gt', 0)
        .each(($post, index, $posts) => {
          // Perform actions on each post
          cy.wrap($post).within(() => {
            cy.contains('Beğen').parent()
            cy.wait(1000); // Wait for some time after clicking 'Beğen', adjust as needed

          });
        });
  });
});*/


