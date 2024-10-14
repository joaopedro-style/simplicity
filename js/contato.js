/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const CampoCep = formulario.querySelector("#cep");
const CampoEndereco = formulario.querySelector("#endereco");
const CampoBairro = formulario.querySelector("#bairro");
const CampoCidade = formulario.querySelector("#cidade");
const CampoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Capturando o clique no botão Buscar */
botaoBuscar.addEventListener("click", function(){
    /* Verificando se o cep NÃO TEM 9 dígitos */
    if( CampoCep.value.length !== 9 ){
        // Informar o usuário sobre o erro
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";

        // Parar completamente a execução do script
        return;
    }

    /* Guardando o valor do cep digitado */
    let cepDigitado = CampoCep.value;

    /* AJAX - Asyncronous JavaScript And XML Técnica de comunicação (transmissão, recebimento) de dados muito usada entre sistemas e tecnologias diferentes. */
    
    
}); //final do evento do botão
