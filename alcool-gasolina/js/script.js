// Função para calcular se é melhor abastecer com álcool ou gasolina
function calcularMelhorPreco() {

  // Validar campos
  let precoAlcool = document.getElementById('alcool').value;  // Obter valor do campo de preço do álcool
  let precoGasolina = document.getElementById('gasolina').value;  // Obter valor do campo de preço da gasolina

  if (precoAlcool != "") {  // Verificar se o campo de preço do álcool não está vazio
    if (precoGasolina != "") {  // Verificar se o campo de preço da gasolina não está vazio

      /* Calcular se é melhor usar álcool ou gasolina
         * Se valorAlcool / valorGasolina >= 0.7 é melhor utilizar Gasolina
         * Senão, é melhor utilizar álcool
      */
      let resultado = precoAlcool / precoGasolina;  // Calcular a relação entre o preço do álcool e o preço da gasolina
      if (resultado >= 0.7) {
        //alert("Melhor utilizar gasolina");
        document.getElementById('resultado').innerHTML = "Melhor utilizar Gasolina";  // Exibir mensagem indicando que é melhor utilizar gasolina
      } else {
        //alert("Melhor utilizar alcool");
        document.getElementById('resultado').innerHTML = "Melhor utilizar Álcool";  // Exibir mensagem indicando que é melhor utilizar álcool
      }

    } else {
      alert("Preencha o preço da Gasolina");  // Alerta se o campo de preço da gasolina estiver vazio
    }
  } else {
    alert("Preencha o preço do Álcool");  // Alerta se o campo de preço do álcool estiver vazio
  }

}
