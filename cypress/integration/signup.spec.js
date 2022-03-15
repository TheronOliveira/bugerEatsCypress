import '../pages/SignupPage'
import SignupPage from '../pages/SignupPage';

describe('cadastro', () => {
            
    var signup = new SignupPage();

    beforeEach(function() {
        cy.fixture('deliver').then((d) =>{
            this.deliver = d;
        })
    });

        it('acessando a tela de cadastro de entregador', function() {
            signup.go();        
        });

    it('Realizando o cadastro preenchendo todos os dados', function() {
        signup.fillForm(this.deliver.signup);
        signup.submit();
    });
});