function comprar() {
    // 1- Recuperar valores e criar variaveis necessarias
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    //2- Condicionais para invocar a função de cada tipo de ingresso 
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
    //3- Funções de cada tipo de ingresso
}
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    //1- verificação de caracter válido.
    if(isNaN(qtd) || qtd < 1){
        alert('Quantidade inválida');
        limparCampo();
        return;
    } 
    //2 - qtdPista é igual ao valor do texto do ID 'qtd-pista' que foi convertida em valor numerico pelo parseint
    if (qtd > qtdPista) { //Condicional para saber se a qtd solicitada é maior que a disponivel (if)    
        alert('Quantidade indisponivel para tipo pista');
        limparCampo();
    } else {
        //A qtd solicitada está disponivel para compra
        qtdPista = qtdPista - qtd;
        //qtdPista é igual ao valor dela mesma - a qtd solicitada pelo usuario
        document.getElementById('qtd-pista').textContent = qtdPista;
        //A ID 'qtd-pista' é subtraida e "transformada" em texto(textContent) para ser exibida na tela através da ID
        alert('Compra efetuada');
        limparCampo();
    }      
}
//Os comentarios se aplicam para o restante das funçoes, mudando apenas o Tipo e a ID.
function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(isNaN(qtd) || qtd < 1){
        alert('Quantidade inválida');
        limparCampo();
        return;
    }   
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponivel para tipo superior');
        limparCampo();
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra efetuada');
        limparCampo();
    }      
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(isNaN(qtd) || qtd < 1){
        alert('Quantidade inválida');
        limparCampo();
        return;
    }   
    if (qtd > qtdInferior) {
        alert('Quantidade indisponivel para tipo inferior');
        limparCampo();
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra efetuada');
        limparCampo()
    }      
}
//limpar campo para novo valor
function limparCampo(){
    document.getElementById('qtd').value = '';
}
