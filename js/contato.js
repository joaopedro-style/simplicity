/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const CampoCep = formulario.querySelector("#cep");
const CampoTelefone = formulario.querySelector("#telefone");
const CampoEndereco = formulario.querySelector("#endereco");
const CampoBairro = formulario.querySelector("#bairro");
const CampoCidade = formulario.querySelector("#cidade");
const CampoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Ativação da máscara para Telefone e CEP */
$(CampoTelefone).mask("(00) 0000-0000");
$(CampoCep).mask("00000-000");


/* Capturando o clique no botão Buscar */
botaoBuscar.addEventListener("click", async function(){
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
    console.log(cepDigitado);
    

    /* AJAX - Asyncronous JavaScript And XML Técnica de comunicação (transmissão, recebimento) de dados muito usada entre sistemas e tecnologias diferentes. */
    
    // Etapa 1: preparar a url contendo o CEP a ser buscado
    let url = `https://viacep.com.br/ws/${cepDigitado}/json/`;
    console.log(url);
    
    // Etapa 2: acessar a API (com a URL) e aguardar o retorno dela
    const resposta = await fetch(url);
    console.log(resposta);
    
    // Etapa 3: extrair os dados do retorno/resposta
    const dados = await resposta.json();
    console.log(dados);

    // Etapa 4: lidar com os dados (em caso de erro e sucesso)
    if( "erro" in dados ){
        mensagemStatus.innerHTML = "CEP inexistente 😥";
        mensagemStatus.style.color = "red";

    } else {
        mensagemStatus.innerHTML = "CEP encontrado 🙂";
        mensagemStatus.style.color = "blue";

        // Selecionando todos os campos com a classe indicada
        const campos = formulario.querySelectorAll(".campos-restantes");

        /* Loop/Laço de Repetição para acessar CADA campo selecionado e remover a classe fazendo com que cada campo volte a aparecer. */
        for(const campo of campos){
            campo.classList.remove("campos-restantes");
        }

        /* Atribuindo os dados para cada campo */

        // Colocar o logradouro como valor do campo endereco
        CampoEndereco.value = dados.logradouro;

        // Colocar o bairro como valor do campo bairro
        CampoBairro.value = dados.bairro;

        // Colocar a localidade como valor do campo cidade
        CampoCidade.value = dados.localidade;


        // Colocar a uf como valor do campo estado
        CampoEstado.value = dados.uf;
    }

}); //final do evento do botão
