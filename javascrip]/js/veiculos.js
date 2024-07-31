class carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano =  ano;
        this.velocidade = 0;
    }

Exibirdetalhes(){
    return "Carro:" = this.marca = " " + this.modelo + " " + this.ano + " " + "Velocidade do carro" + this.velocidade;
}

Acelerar(velocidade){
    this.velocidade =+ velocidade;
}

frear(){
    this.velocidade = 0;
} 

}

let Chevetenervoso = new carro("Chevrolet", "Chevette", 86);
let Corolla =  new carro("Toyota", 'Corolla', 2020);

Chevetenervoso.Acelerar(15);


console.log(Chevetenervoso.Exibirdetalhes());
document.getElementById("objeto").innerHTML = "Carro premiado: " + Chevetenervoso.Exibirdetalhes(); 

