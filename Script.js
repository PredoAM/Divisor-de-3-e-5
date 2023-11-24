function divisivel() {
    let n = parseInt(prompt("Digite um número:"));
    let qtd = 0;
    let divisor = 0

    for (divisor = 0; divisor < n; divisor++) {
        if (divisor % 3 === 0 || divisor % 5 === 0) {
            qtd += divisor;
        }
    }

    
    alert("O resultado é: " + qtd);

    
    let continuar = prompt("Deseja inserir outro número? (Digite 'sim' ou 'não')");

    if(continuar === 'sim'){
        divisivel()
    }else{
        close()
    }
}


divisivel();
