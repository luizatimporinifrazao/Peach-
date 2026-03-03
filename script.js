/////////////////////////////////////////////////////////
//---------------------mario-----------------------------
/////////////////////////////////////////////////////////

//criando variaveis para encontrar as classes
let mario = document.querySelector('.mario')//encontra mario
let cano = document.querySelector('.cano')//encontra cano
let nuvem = document.querySelector('.nuven')//encontra nuvem
let telafim = document.querySelector('.fim')//encontra a tela game over
let botaoReiniciar = document.querySelector('.reiniciar')// encontra o botão

console.log('===PARADA 01===');
console.log('Mario:' , mario)
console.log('cano:' , cano);
console.log('nuvem:' , nuvem);
console.log('Tela de Fim' , telafim);
console.log('botão:' , botaoReiniciar);

function jump(){
    mario.classList.add('pular')

    setTimeout(function(){
        mario.classList.remove('pular')
    } , 500)    
}

document.addEventListener('click' , function(){
    console.log('tecla perssonalizada! chamando função jump()')
     
    //Qual function chamar?
    jump()

})

document.addEventListener('keydown' , function(){
    console.log('tecla perssonalizada! chamando função jump()')
     
    //Qual function chamar?
    jump()

})

console.log("iniciando loop");
console.log("colisão");

//getComputeStyle = pega o estilo atual do elemento
// replace tira o 'px' do valor e o na frente transforma em número
//---> +window.getComputedStyle(mario)
//---> Pergunta ao navegador: "Qual é a posição atual do Mario na tela"
//---> .bottom
//---> Pega a distância do Mario (em pixels)
//---> .replace
//---> Tira o px, deixando só o numero: "120"
//---> Transformar o texto "120" no numero 120, para o js fazer as contas

let loopDojogo = setInterval(function(){
    //offseLeft: Distancia do elemento até a borda esquerda da tela
    let posicaoCano = cano.offsetLeft


    //getComputedStyle : pega o estilo atual do elemento
    //replace tira o 'px' do valor e o + na frente transforma em numero
    //window seleciona todo o estilo da tela, tudo que está na tela
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px' , '');
    //console.log('cano ' , posicaoCano , 'mario ', posicaoMario);
    
    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60){
        console.log('=== COLISÃO DETECTADA ===')
        console.log('cano na posição ' , posicaoCano);
        console.log('mario na posição ' , posicaoMario);
        console.log('fim de jogo!');
        
        //agora temos:
        //parar o mario e o cano
        //mudar imagem do mario
        //mostrar tela de game over
        //parar o loop


        //para o cano
        cano.style.animation='none';
        cano.style.left=posicaoCano + 'px';

        //para o mario
        mario.style.animation='none';
        mario.style.bottom=posicaoMario + 'px';

        mario.src='./img/game-over.png'
        mario.style.width='70px'
        telafim.style.visibility='visible'
    }
    
})






function reiniciarJogo() {
    telafim.style.visibility='hidden';
    cano.style.animation = 'mexerCano 1.5s infinite linear';
    cano.style.left='';

    mario.src = './img/mario.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.animation = ''; //remove qualquer animação fixa


  


  //===================================
    //>>>novo loop<<<
    //===================================

loopDojogo= setInterval(function(){
    let posicaoCano = cano.offsetLeft;
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px' , '');
        
    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60){
        console.log('=== COLISÃO DETECTADA ===')
            
        cano.style.animation='none';
        cano.style.left=posicaoCano + 'px';

//para o mario
        mario.style.animation='none';
        mario.style.bottom=posicaoMario + 'px';
        mario.src='./img/game-over.png'
        mario.style.width='70px'
        telafim.style.visibility='visible'
        clearInterval(loopDojogo)
}
}, 10)
}
botaoReiniciar.addEventListener('click' , function(){

    //Qual function chamar?
    reiniciarJogo()

})
