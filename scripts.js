function debitoTecnico(){
    let para = document.createElement('p');
    para.textContent = 'Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade. O motivo por trás de tudo isso? Diminuir o tempo de lançamento de determinado produto de software.';
    document.getElementById("debitoTecnicoDiv").appendChild(para);
}
function abrirUrlSonar(){
    window.open("https://www.devmedia.com.br/sondando-qualidade-de-codigo-com-o-sonar/24239");
}
function abrirUrlJenkins(){
    window.open("https://blog.mandic.com.br/artigos/5-perspectivas-para-impulsionar-a-produtividade-usando-jenkins/");
}
function contaAte10(){
    for (i = 0 ; i <= 10 ; i++){
        let para = document.createElement('p');
        para.textContent = i;
        document.getElementById("conta10Div").appendChild(para);
    }
}