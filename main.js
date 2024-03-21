const form = document.getElementById ('form-valor');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroFinalA = document.getElementById('campoA');
    const numeroFinalB = document.getElementById('campoB');

    const valorA = parseFloat(numeroFinalA.value);
    const valorB = parseFloat(numeroFinalB.value);

    const mensagemSucesso = `Preenchimeto correto. O valor de A é <b>menor</b> que o valor de B: ${numeroFinalA.value} < ${numeroFinalB.value}`;
    const mensagemErro = `Preenchimento incorreto. O valor de A é <b>maior</b> que o valor de B:  ${numeroFinalA.value} > ${numeroFinalB.value}`;

    if (valorA <= valorB){
        const containerMensagemSucesso = document.querySelector('.mensagem-de-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.mensagem-de-erro').style.display = 'none';

        numeroFinalA.value = '';
        numeroFinalB.value = '';

    }else{
        const containerMensagemErro = document.querySelector('.mensagem-de-erro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        document.querySelector('.mensagem-de-sucesso').style.display = 'none';

        numeroFinalA.value = '';
        numeroFinalB.value = '';
    }
});



