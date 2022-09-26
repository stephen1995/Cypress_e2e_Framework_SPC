/// <reference types="Cypress" />
import { HomePage } from '../pageObjects/HomePage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let homePage = new HomePage;

Given("I visit flights page", () => {

    cy.visit(Cypress.env("testPageURL"))
})


And("I add {string} to my cart", (text) => {

    cy.clickByTextInList(text)
})

And("search for a economy flight", () => {

    cy.contains("One Way").click({ force: true })
    cy.get("#oneWayFlight_fromLocation").type("NYC", { force: true })
    cy.get("a[data-testid='DropdownListGroupItem_0_0_link']").click({ force: true })


    cy.get("#oneWayFlight_toLocation").type("LAX", { force: true })
    cy.get("a[data-testid='DropdownListGroupItem_0_0_link']").click({ force: true })

    cy.get("#oneWayFlightDepartureDate").type("09/20/2022", { force: true })

    cy.get("[data-testid='SearchFlights']").click({ force: true })




})

And("select a 300 dollars flight", () => {
    cy.get(".FlightInformation").each(($el, i, $list) => {

        let currentValue = $el.find("h3.margin-0 span").text()
        cy.log(currentValue)
        if (currentValue > 300) {
            cy.log("Lo hicimos")
            $el.find("[aria-label='Select Flight']").trigger("be.visible")
            return false
        }

    })
})

And("enter valid credentials", () => {

    cy.get("#eliloUserID").type("aren901198")
    cy.get("#eliloPassword").type("flower1234")
    cy.get("#loginSubmit").click()

})






