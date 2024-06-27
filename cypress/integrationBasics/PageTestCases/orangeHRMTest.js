import login_POM from "../../support/pageClasses/login_POM";
import logout_POM from "../../support/pageClasses/logout_POM"
import link_POM from "../../support/pageClasses/link_POM";


describe('', () => {

    //create objects of all the 3 classes

    const login = new login_POM();
    const logout = new logout_POM();
    const link = new link_POM();

    it('Login and Logout Test', () => {

        login.enterurl();
        login.login();
        link.clickonlink("Admin");
        cy.wait(2000)
        link.clickonlink("Leave")
        cy.wait(2000)
        logout.logout();



        
    });

    
});