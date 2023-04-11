context('Buy item', () => {

    beforeEach(() => {

        cy.visit('')
        .get('#user-name')
        .type('standard_user')
        .get('#password')
        .type('secret_sauce')
        .get('#login-button')
        .click()
    })
    
    it('Buys an item(s) from the site', () => {
        cy.get('.inventory_list').find('.inventory_item') 
        .each((product,index,$list) => {
            cy.wrap(product).find('button').contains('Add to cart').click()
        })
        cy.get('.shopping_cart_link').click()
        //cy.wait(3000)
        cy.get('.cart_footer').find('button').contains('Checkout').click()
        cy.get('#first-name').type('Standard')
        cy.get('#last-name').type('User')
        cy.get('#postal-code').type('GH233')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })

    it('Orders an item(s) from the site and cancels on the last page', () => {
        cy.get('.inventory_list').find('.inventory_item') 
        .each((product,index,$list) => {
            cy.wrap(product).find('button').contains('Add to cart').click()
        })
        cy.get('.shopping_cart_link').click()
        //cy.wait(3000)
        cy.get('.cart_footer').find('button').contains('Checkout').click()
        cy.get('#first-name').type('Standard')
        cy.get('#last-name').type('User')
        cy.get('#postal-code').type('GH233') 
        cy.get('#continue').click()
        cy.get('#cancel').click()
    })

    it('Removes item(s) from the cart', () => {
        cy.get('.inventory_list').find('.inventory_item') 
        .each((product,index,$list) => {
            cy.wrap(product).find('button').contains('Add to cart').click()
        })
        cy.get('.shopping_cart_link').click()
        //cy.wait(3000)
        cy.get('.cart_list').find('.cart_item')
        .each((item,index,$list) => {
            const productText = item.find('.inventory_item_name').text()
            if(productText.includes('Sauce Labs Bike Light')){
                cy.wrap(item).find('button').click()
            }
            if(productText.includes('Sauce Labs Bolt T-Shirt')){
                cy.wrap(item).find('button').click()
            }
        })
    })
    
    it('Orders items(s) from highest price to lowest from Static Dropdown', () =>{
        //cy.get('.product_sort_container').select('lohi').should('have.value','lohi')
          cy.get('.product_sort_container').as('productcontainer').select('lohi')
          cy.get('@productcontainer').should('have.value','lohi')
    })
})