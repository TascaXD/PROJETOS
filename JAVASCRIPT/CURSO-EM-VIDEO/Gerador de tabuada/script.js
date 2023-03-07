function clicar() {
    let num = parseInt(document.querySelector('#num').value);
    let selectTabuada = document.querySelector('#tabuada');
    
    if (!num) {
        alert('Por favor, informe um número válido');
        return;
      }
    selectTabuada.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        let option = document.createElement('option');
        option.text = `${num} x ${i} = ${resultado}`;
        selectTabuada.add(option);
    }
}