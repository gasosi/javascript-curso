const Cachorro = {
    nome:"Bob",
    raca: "vira-lata",
    cor: "caramelo",
    porte: ["Pequeno", "Médio", "Grande"],

}

let exibir = JSON.stringify(Cachorro);  

let exibirporte = (Cachorro.porte[1]);

document.getElementById("objeto").innerHTML=exibirporte;