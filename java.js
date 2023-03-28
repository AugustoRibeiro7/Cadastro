function validarCPF(cpf) {
    
    // Validar o primeiro dígito verificador
    var soma = 0;
    for (var i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = 11 - (soma % 11);
    var digitoVerificador1 = (resto > 9) ? 0 : resto;
    if (digitoVerificador1 != parseInt(cpf.charAt(9))) return false;
    
    // Validar o segundo dígito verificador
    soma = 0;
    for (var i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    var digitoVerificador2 = (resto > 9) ? 0 : resto;
    if (digitoVerificador2 != parseInt(cpf.charAt(10))) return false;
  
    return true;
  }

function receber_dados ()
{
    //CRIAR VARIAVEIS PARA VERIFICAR
    let condicao = ["vet", "vet", "vet", "vet"];
    // RECEBENDO DADOS
    let nomeTamanho;
    let array;

    array = document.getElementsByClassName("dados");
    //VERFICAR ESCRITA
    condicao[0] = true;
    for(let i = 0; i< array.length && condicao[0] == true; i++)
    {
        if(array[i].value.length === 0)
        {
            condicao[0] = false;
            let estilo0 = document.getElementById("cadastro");
            estilo0.style.paddingTop = "2%";
            estilo0.style.paddingBottom = "3%";
            document.getElementById("aviso_vazio").style.marginTop = "5%";
            document.getElementById("aviso_vazio").innerText = "Falta de dados cadastrados! Tente novamente..";
            
            setTimeout(function(){
                location.reload();
            }, 3000);
        }
    }

    // VERIFICANDO NOME
    nomeTamanho = array[0].value.length;
    if(nomeTamanho > 100)
    {
        let estilo = document.getElementById("secao_nome");
        estilo.style.paddingBottom = "2%";
        estilo.style.flexWrap = "wrap";
        document.getElementById("secao_nome").style.justifyContent = "center";
        estilo.style.alignContent = "center";
        document.getElementById("nome").style.width = "83%";
        document.getElementById("aviso").innerText = "<Nome Muito Grande> Abrevie!";
        condicao[1] = false;
    }
    else
    {
        condicao[1] = true;
    }

    // VERIFICAR CPF
    let CPF = array[1].value;
    CPF = validarCPF(CPF);
    condicao[3] = true;
    if(CPF == false)
    {
        let estilo1 = document.getElementById("secao_cpf");
        estilo1.style.paddingBottom = "2%";
        estilo1.style.flexWrap = "wrap";
        estilo1.style.justifyContent = "center";
        estilo1.style.alignContent = "center";
        document.getElementById("cpf").style.width = "88%";
        document.getElementById("aviso1").innerText = "CPF Invalido! Digite Novamente";
        condicao[3] = false;
        setTimeout(function(){
            location.reload();
        }, 3000);
    }

    // VERIFICANDO ENDEREÇO RUA
    let ruaTamanho = array[2].value.length;
    let mensagem = "<Endereço Grande> Abrevie!";
    if(ruaTamanho > 50)
    {
        let estilo2 = document.getElementById("secao_rua");
        estilo2.style.paddingBottom = "2%";
        estilo2.style.flexWrap = "wrap";
        estilo2.style.justifyContent = "center";
        estilo2.style.alignContent = "center";
        document.getElementById("aviso2").innerText = mensagem;
        condicao[2] = false;
    }
    else
    {
        condicao[2] = true;
    }

    // VERIFICANDO ENDEREÇO BAIRRO
    let bairroTamanho = array[4].value.length;
    if(bairroTamanho > 50)
    {
        let estilo3 = document.getElementById("secao_bairro");
        estilo3.style.paddingBottom = "2%";
        estilo3.style.flexWrap = "wrap";
        estilo3.style.justifyContent = "center";
        estilo3.style.alignContent = "center";
        document.getElementById("bairro").style.width = "83%";
        document.getElementById("aviso3").innerText = mensagem;
    }

    // MUDAR DE PAGINA
    else if(condicao[0] && condicao[1] && condicao[2] && condicao[3] == true)
    {
        let vetor = Array.from(array).map(element => element.value);
        localStorage.setItem("array", JSON.stringify(vetor));
        window.location.href = "home/home.html";
    }
}