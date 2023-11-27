/// <reference types ="Cypress"/>

describe("Ecommerce-demo", function(){

    it("Registration",() =>{
        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.contains('My Account').click();
        cy.contains('Register').click();
        cy.get('#input-firstname').type("Mohammed ");
        cy.get('#input-lastname').type("Nomaan");
        cy.get('#input-email').type("nomaan1510@gmail.com");
        cy.get('#input-telephone').type("90876543212");
        cy.get('#input-password').type("Nomaan@123");
        cy.get('#input-confirm').type("Nomaan@123");
        cy.get('input[name="agree"]').check();
        cy.get('.btn-primary').click(); 

        cy.get('.alert-dismissible').then(($alert) =>{
            if($alert.text().includes('E-Mail Address is already registered!')){
                cy.contains('login page').click();
            }
            else{
                cy.contains('My Account').click();
                cy.contains('Register').click();
            }
        })

        cy.get('#input-email').type("nomaan1510@gmail.com");
        cy.get('#input-password').type("Nomaan@123");
        cy.get('input[type="submit"][value="Login"].btn.btn-primary').click();
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
        // cy.get('id attribute is not available for this element')
        cy.get('input[placeholder="Search"]').type('Macbook Ai');
        cy.get('button[class="btn btn-default btn-lg"]').click();
        cy.get('div[class="product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12"] button:nth-child(1)').click();
        cy.get('input[placeholder="Search"]').clear();
        cy.get('input[placeholder="Search"]').type('macbook');
        cy.get('button[class="btn btn-default btn-lg"]').click();
        cy.scrollTo(0, 600); 
        cy.contains('MacBook Air').click({force:true});
        cy.get('#input-quantity').clear();
        cy.get('#input-quantity').type(2);
        cy.get('#button-cart').click();
        cy.get('button.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle').click();
        cy.contains('Checkout').click();
     
        cy.get('#cart-total').click();
        // cy.get('#input-payment-firstname').type("Mohammed");
        // cy.get('#input-payment-lastname').type("Nomaan");
        // cy.get('#input-payment-address-1').type("1/6 4th street jayanagar");
        // cy.get('#input-payment-city').type("Bangalore");
        // cy.get('#input-payment-postcode').type("560034");
    
        // cy.get('#input-payment-country').contains("India").click();
        // cy.get('#input-payment-zone').contains("Karnataka").click();
        cy.get('#button-payment-address').click();
        cy.get('#button-shipping-address').click();
        cy.get('#button-shipping-method').click();
        cy.get('input[type="checkbox"]').click();
        cy.get('#button-payment-method').click();
        cy.get('#button-confirm').click();
        

        


    })

    
})