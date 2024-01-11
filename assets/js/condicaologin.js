function validarSenha() {
    let senha1 = document.getElementById('senha');
    let senha2 = document.getElementById('confirmarsenha');
    if (senha1.value != senha2.value) {
        senha2.setCustomValidity("As senhas são diferentes!");
        senha2.reportValidity();
        return false;
    } else {
        senha2.setCustomValidity("");
        return true;
    }
}
senha2.addEventListener('input', validarSenha);

function criarconta() {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'inline';
}

function voltar() {
    document.getElementById('form1').style.display = 'inline';
    document.getElementById('form2').style.display = 'none';
}

function recsenha() {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form3').style.display = 'inline';
}

function recsenha2() {
    let email = document.getElementById('emailcon');
    if (email.value == "") {
        email.setCustomValidity("Informe o email!");
        email.reportValidity();
        return false;
    } else {
        email.setCustomValidity("");
        return true;
    }

    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'inline';
    document.getElementById('form3').style.display = 'none';
}

function voltar2() {
    document.getElementById('form1').style.display = 'inline';
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form3').style.display = 'none';
}