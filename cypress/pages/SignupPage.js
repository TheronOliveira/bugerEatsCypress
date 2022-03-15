
class SignupPage{
    
    go(){
        cy.visit("https://buger-eats.vercel.app");
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
    }

    fillForm(deliver){       
        cy.get('input[placeholder="Nome completo"]').type(deliver.name);
        cy.get('input[placeholder="CPF somente números"]').type(deliver.cpf);
        cy.get('input[placeholder="E-mail"]').type(deliver.email);
        cy.get('input[placeholder="Whatsapp"]').type(deliver.whatsapp);

        cy.get('input[name="postalcode"]').type(deliver.address.postalCode);
        cy.get('input[name="address-number"]').type(deliver.address.number);
        cy.get('input[name="address-details"]').type(deliver.address.addressDetails);
        cy.get('input[type="button"][value="Buscar CEP"]').click();

        cy.get('input[name="address-number"]').should('have.value', deliver.address.number);

        cy.contains('[class="delivery-method"] li', "Moto").click();

        cy.get('input[type="file"]').selectFile('cypress/fixtures/cnh-digital.jpg', {force:true});
    }

    submit(){
        const cadastro = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        cy.contains('button[type="submit"]', 'Cadastre-se para fazer entregas').click();
        cy.get('div[class="swal2-html-container"]').should('have.text',cadastro);
    }
}

export default SignupPage