let form = document.getElementById('form')
let nome = document.getElementById('first');
let sobrenome = document.getElementById('last')
let campo = document.getElementById('exampleFormControlTextarea1');
let nick = document.getElementById('nick');
let hora = document.getElementById('hour');
let sucesso = document.getElementById('divSucesso');
let erro = document.getElementById('divErro');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    if(nome.value == "" | sobrenome.value =="" | campo.value == "" | nick.value == "" | hora.value ==""){
        alert("Preencha todos os campos"), $(erro).addClass('active')
    }
    else{
        return $(sucesso).addClass('active'), $(erro).removeClass('active')
    }
});

