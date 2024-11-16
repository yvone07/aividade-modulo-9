//Seleciona os elementos do DOM que serão manipulados 
const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById ("mensagem");

//Adiciona um evento de clique ao botão
botao.addEventListener( "click", () => {
    //Solicita o nome do usuário 
    let nome = prompt ("Qual é o seu nome?") ;

    //Condição para verificar se3 o nome foi fornecido 
    if (nome){
        //Solicita a idade do usuário
        let idade = prompt ("Qual é a sua idade?");

        //Condição para verificar se a idade é um número válido
        if (isNaN (idade) || idade <= 0) {
            mensagem .interText= "Por Favor insira uma idade valida";
            mensagem.style.color = "red"; // Altera a cor da mensagem para vermelho
        }else {
            //Saida de dados com base na idade fornecida 
            if (idade < 18) {
                mensagem.interText = 'Olá $(nome)! Voce tem apenas $(idade) anos.';
                mensagem.style.color="blue" // Altera a cor do texto para azul
            } else {
                mensagem.interText = 'Olá $ {nome}! Voce é maior de idade com ${idade} anos.';
                mensagem.style.color = "grenn"; //Altera a cor do texto para verde
            }
            console.log ('Nome do usuário: ${nome}');
            console.log ('Idade do Usuário: ${idade}');
        }
    }else{ 
        mensagem.innerText = "Nome não fornecido. Por favor, insira  um nome ";
        mensagem.style.color= "orange"; //Altera a cor do texto para laranja
    } 
});