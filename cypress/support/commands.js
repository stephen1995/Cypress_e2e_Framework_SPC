// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add("selectLinkByText", (text) => {

    cy.get("a").each(($element, index, $list) => {
        if ($element.text().includes(text)) {
            cy.get("a").eq(index).click()
        }
    })

})

Cypress.Commands.add('clickLink', (text) => {
    cy.get('a').contains(text).click()
})

Cypress.Commands.add('clickByTextInList', (text) => {
    cy.get(".product").each(($xList, i, $list) => {

        let currentText = $xList.find("h4.product-name").text()
        cy.log(currentText)
        if (currentText.includes(text)) {
            $xList.find("button").click()
        }

    })
})


//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
