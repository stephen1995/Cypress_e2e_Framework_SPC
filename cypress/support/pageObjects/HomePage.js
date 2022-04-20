
export class HomePage {


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

