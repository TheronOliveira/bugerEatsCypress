
describe('Acessar página Buger-Eats', () => {
    it("Acessando site com sucesso", () =>{
        cy.visit("https://buger-eats-qa.vercel.app");
        cy.get('#root #page-home .content main h1').should('have.text', "Seja um parceiro entregador pela Buger Eats");
    })
});