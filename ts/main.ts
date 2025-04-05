namespace empresa{

    const calc = document.getElementById("calc") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;
    const campoSaldo = document.getElementById("saldo") as HTMLInputElement;

    const campoCodigo = document.getElementById("campoCodigo") as HTMLInputElement;

    const campoDeposito = document.getElementById("campoDeposito") as HTMLInputElement;
    const campoCompra = document.getElementById("campoCompra") as HTMLInputElement;

    const btnComprar = document.getElementById("Comprar") as HTMLButtonElement;
    const btnDeposito = document.getElementById("Deposito") as HTMLButtonElement;

    let p: Cliente;
    
    
    calc.addEventListener("click", ()=>{
        p = new Cliente(parseInt(campoCodigo.value));
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        // p.codigo = 90
        
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("codigo").textContent = p.codigo.toString()
        document.getElementById("saldo").textContent = p.saldo.toString()
    });

    btnDeposito.addEventListener("click", ()=>{
        p.deposita(parseFloat(campoDeposito.value));
        document.getElementById("saldo").textContent = p.saldo.toString();
    })

    btnComprar.addEventListener("click", ()=>{
        if(p.comprar(parseFloat(campoCompra.value))){
            document.getElementById("saldo").textContent = p.saldo.toString(); 
            alert("Obrigado pela compra");
        }
        else{
            alert("Saldo insuficiente, faça um depósito!")
        }

         
    })
    
}