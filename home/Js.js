let array = JSON.parse(localStorage.getItem("array"));

//NOME
document.getElementById("nome").innerText = array[0];

//CPF
document.getElementById("cpf_sub").innerText = array[1];

// RENDA
renda = parseFloat(array[6]);

if(renda >= 2787.00)
{
    document.getElementById("renda_sub").innerText += "Acima da média mensal do Brasil";
}
else
{
    document.getElementById("renda_sub").innerText += "Abaixo da média mensal do Brasil";
}

// IDADE

const data_nasc = new Date(array[5]);
const hoje = new Date();
const diferenca = hoje - data_nasc;
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
document.getElementById("idade_sub").innerText += idade + " anos";

// PROFISSÃO
document.getElementById("prof_sub").innerText += array[7];