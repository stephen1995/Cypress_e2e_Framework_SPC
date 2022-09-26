
export class HomePage {


    visitHexacta() {
        cy.visit("https://www.hexacta.com/")
    }

    visitRahulShetty() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    }

    clickOnSearchLink() {
        cy.get(".searchbox").click()
    }

    searchForWord() {
        cy.get(".search-field").type("Outsource{enter}")
        //cy.get(".search-field").type("")
    }

    verifyWordIsPresentInResults() {

        cy.get("h3 a").each(($element, index, $list) => {


        })
    }

    visitHomePage() {
        cy.visit("/");
    }

    clickOnSignInLnk() {
        cy.get("#header-account").click()
    }

    performSignIn() {
        cy.get("#username").click().type(Cypress.env("username"))
        cy.get("#password").click().type(Cypress.env("password"))
        cy.get("[type = 'submit']").click()
    }

    clickOnProfileIconLnk() {
        cy.get("[href *= 'profile_info']").first().click()
    }

    verifyUsernameIsShown() {
        cy.get(".username").should("have.text", Cypress.env("username"))

    }

    clickOnSignUpBtn() {
        cy.get(".signup-btn").click()
    }

    clickOnHavingTroubleLnk() {
        cy.contains("Having trouble?").click()
    }

    verifyUserisTakenToRegisterPage() {
        cy.url().should("contains", "register")
    }

    verifyUserisTakenToSendPasswordPage() {
        cy.url().should("contains", "sendpassword")
    }






    validateUserIsTakenToContentSelected() {
        cy.get(".listing-top ul").as("listOfNews")

        cy.get("@listOfNews").find("li a").each(($element, index, $list) => {

            cy.request($element.prop("href")).its("status").should("eq", 200)

        })
    }


}

