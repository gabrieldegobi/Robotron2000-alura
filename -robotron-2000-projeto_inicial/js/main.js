const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach((elemento) => {/*percorer uma lista */
    elemento.addEventListener('click', (evento) => {
        console.log(evento)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})
function padrao() {

}

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('[data-contador]')
    console.log(controle)


    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }

}
/*
FUNÇAO QUE IRÁ ATUALIZAR TODAS AS ESTATISTICAS DE COMBATE DO ROBÔ, INCREMENTADO 
A PARTE QUE QUANDO SE CLICAR NO '-' IRÁ DIMINUIR OS VALORES.
A EXPLICAÇÃO DO PROFESSOR SOMENTE ENSINAVA INCREMENTAR
*/
function atualizaEstatisticas(peca, operacao) {
    console.log(operacao)
    estatistica.forEach((elemento) => {
        /*console.log(elemento.dataset.estatistica)*/
        if (operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    })
}
/*
ARQUIVOS DISPONIBILIZADOS PELA PROPRIA ALURA
A PARTE DO ALUNO É SOMENTE COMPREENDER A LOGICA E O CODIGO PARA QUE VENHA
SER MODIFICADOS PELO DOCUMENT OBJECT MODEL.
*/







/*const name1 = prompt('DIGITE O SEU NOME AQUI.')*/

/*forEach => 

target =>  onde o click aconteceu

.textContent => quando e um texto
textValue=> quando é um imput

evento.target.textContent => pega o valor de texto que esta dentro do elemento html que foi clicado

evento.target.parentNode => ir até o elemento pai (o elemento que esta acima)


*/

/*
dizoi (name1)

[pesquisar data-atributs]{
    Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).

Data-attributes não devem ser utilizados para dados visíveis, pois tecnologias de acessibilidade podem não identificar seus valores.

Sua estrutura é dividida em duas partes:

A primeira parte é o identificador deste dado, que consiste em data- + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído.
A segunda parte é o valor atribuído à este data-attribute, este valor deve sempre estar entre aspas “”, e dessa maneira é lido como uma string.
}


*/

/*
DOM - Document Object Model - modelo de objeto do documento

function => serve para armazenar um pedaço de codigo // forma de armazenarmos codigos que ira se repetido varias vezes

.addEventListern() => é um escutador de eventos js




.value => Modifica  textos de inputs
.innerHTML => Modifica textos


.getElementByClassName('NOME DA CLASS') => Seleciona elementos pela class
.getElementById('NOME DO ID') => Seleciona elementos pelo ID
.querySelector('NOME DO ID, OU CLASS') => Seleciona IDs ou CLASSEs

document => onde o javascript irá buscar o elemento


parseInt => transforma uma string em numero
*/