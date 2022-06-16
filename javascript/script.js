
function calcularValorCombustivel(){
  
  let precoGas = document.querySelector("#precoGas");
  let precoGasValue = precoGas.value;

  let precoAlc = document.querySelector("#precoAlc");
  let precoAlcValue = precoAlc.value;

  try {
        let tratamentoVirgulaGas = trocaVirgulaEColocaPonto(precoGasValue);
        let tratamentoVirgulaAlc = trocaVirgulaEColocaPonto(precoAlcValue);

        function trocaVirgulaEColocaPonto(preco){
          let resultado = preco.toString().replace(",",".");
          return resultado;
        }

        let tamanho = tratamentoVirgulaGas.length; 
        let numeroValido = false; 
        let gasolinaChar;
        let alcoolChar;

        for (let i = 0; i < tamanho; i++) {
          gasolinaChar = tratamentoVirgulaGas.charCodeAt(i);
          alcoolChar = tratamentoVirgulaAlc.charCodeAt(i);

          if(gasolinaChar > 47 && gasolinaChar < 58 && alcoolChar > 47 && alcoolChar < 58) numeroValido = true;
            
          else numeroValido = false;
        }

        if(numeroValido) calcularCombustivel();
        
        else alert('Digite um numero valido!\n' 
                    + '-- Campo Gasolina -- ou -- Campo Alcool --'
                      + ' pode estar preenchido de forma inadequada...');
        
        function calcularCombustivel()
        {
          const alcool = tratamentoVirgulaAlc;
          const gasolina = tratamentoVirgulaGas;

          let calculoAlcVSGas = alcool / gasolina;
          let resultado = calculoAlcVSGas * 100;
      
          let economia = 100 - resultado;
      
          let tanque = (50 * economia) / 100;
      
          let msg;
          let res;
          if(resultado <= 70){
            msg = " Abasteça com Àlcool ";
            res = document.getElementById('res');
            res.innerHTML = "<i class='fa-solid fa-gas-pump'></i> &nbsp;" + msg;
            
            let perc = document.getElementById('perc');
            perc.innerHTML = "<i class='fa-solid fa-circle-dollar-to-slot'></i> &nbsp;" 
                                + economia.toFixed() 
                                  + "% de economia";

            let tan = document.getElementById('tan');
            tan.innerHTML = "<i class='fa-solid fa-piggy-bank'></i> &nbsp;" 
                              + " R$" 
                                + " " 
                                  + tanque.toFixed() 
                                    + " economizados a cada" 
                                      +  "<p>R$ 50 abastecidos</p>";
          }else{
            msg = "Abasteça com Gasolina" 
                    + "<div><br ></div>"
                     + "<i class='fa-solid fa-circle-dollar-to-slot'></i> &nbsp; "
                      + "È a opção mais econômica neste preço.";

            res = document.getElementById('res');
            res.innerHTML = "<i class='fa-solid fa-gas-pump'></i> &nbsp;" + msg;
            
            document.getElementById('perc').innerText = " ";
            document.getElementById('tan').innerText = " ";
          }  
        }
    } catch (exception) {
        throw alert(exception);
    }
}