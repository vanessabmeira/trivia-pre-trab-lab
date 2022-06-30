 let ponto= 0 //pontuação

function verificar() {
let res1= document.querySelector('div#res1') // Definir var para aplicar a mudança de text
  
    if(document.getElementById('abacaxi').checked) {  
        res1.innerText='Você acertou !! O abacaxi é uma planta vinda da América tropical, cultivada em muitas regiões quentes, é originário da América do Sul; mais especificamente, da região sul do Brasil.'       //CHECKED devolve true
        res1.style.color= '#1A936F' //alterar a cor
        
        document.getElementById("gif").innerHTML="<img src='minions.gif' width=300 >" //Imagem
          
        ponto= ponto+1
         document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5 &#x1F60F;`
          
      }else {
        res1.innerText='Você errou, tente novamente não desista!' 
        res1.style.color= '#d62828'
        
        document.getElementById("gif").innerHTML="<img src='minions2.gif' width=300 >"

      document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5  &#x1F60F;`
      }


}


function verificar2() {
  let res2= document.querySelector('div#res2')
  
    if(document.getElementById('arroz').checked) {
      res2.innerText='Você acertou !! Consumido por 84% dos brasileiros o arroz é um alimento-base da dieta brasileira. O cereal não contém colesterol e é uma boa fonte de sais minerais. A título de curiosidade, a China é o maior produtor e consumidor de arroz do mundo.'
      res2.style.color='#1A936F'
      
      document.getElementById("gif2").innerHTML="<img src='minions.gif' width=250 >"

      ponto= ponto+1
      document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5 &#x1F60F;`
    } else {
      res2.innerText='Você errou, tente novamente não desista!'
      res2.style.color='#d62828'

      document.getElementById("gif2").innerHTML="<img src='minions2.gif' width=300 >"

      document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5  &#x1F60F;`
    }

}


function verificar3(){
  let res3= document.querySelector('div#res3')
  
  if(document.getElementById('sorvete').checked){
    res3.innerText='Você acertou!! O primeiro relato sobre a origem do sorvete foi á 3 mil anos atrás, no Oriente. Os chineses costumavam preparar uma pasta de leite de arroz misturado à neve, algo parecido com a atual raspadinha. No Brasil, por exemplo, o sorvete só teria se popularizado a partir de 1941.'
    res3.style.color='#1A936F'

    document.getElementById("gif3").innerHTML="<img src='minions.gif' width=250 >"

    ponto= ponto+1
    document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5 &#x1F60F;`
  } else {
    res3.innerText='Você errou, tente novamente não desista!'
    res3.style.color='#d62828'

    document.getElementById("gif3").innerHTML="<img src='minions2.gif' width=300 >"

    document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5  &#x1F60F;`
  }
}


function verificar4() {
let res4= document.querySelector('div#res4')
  if(document.getElementById('polvilho').checked) {
    res4.innerText='Você acertou!!!  Alguns registros apontam a criação do pão de queijo no estado mineiro no século XVIII, época em que a farinha de trigo disponível era de péssima qualidade e, no lugar, era utilizado o polvilho, oriundo da mandioca, trazido pelos portugueses.'
    res4.style.color= '#1A936F'

    document.getElementById("gif4").innerHTML="<img src='minions.gif' width=250 >"

    ponto= ponto+1
    document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5 &#x1F60F;`
  } else{
    res4.innerText='Você errou, tente novamente e não desista!'
    res4.style.color= '#d62828'

    document.getElementById("gif4").innerHTML="<img src='minions2.gif' width=300 >"
    
    document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5 &#x1F60F;`
  }
}


function verificar5() {
  let res5= document.querySelector('div#res5')
  if(document.getElementById('jabuticaba').checked){
    res5.innerText='Você Acertou !!! A jabuticaba é o fruto da jabuticabeira, árvore originária do Brasil, nativa da Mata Atlântica. A jabuticabeira floresce de setembro a dezembro a partir do sexto ano de plantio.'
    res5.style.color= '#1A936F'

    document.getElementById("gif5").innerHTML="<img src='minions.gif' width=250 >"

    ponto= ponto+1
    document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5 &#x1F60F;`
  } else{
    res5.innerText='Você errou, tente novamente e não desista!'
    res5.style.color= '#d62828'

    document.getElementById("gif5").innerHTML="<img src='minions2.gif' width=300 >"

    document.getElementById("ponto").innerHTML=`Você acertou ${ponto} de 5 &#x1F60F;`
  }
}
