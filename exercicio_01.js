/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
    }
    catch{
      console.log(erro.Stack)
    }
  } 

  atributos() {
    if(this.nome != "" & this.idade != "" & this.especie != ""){
    return 
      this.nome, this.idade, this.especie;
    }
    else if (this.nome == ""){
      throw new Error("Ocorreu um erro! O campo nome é obrigatório.")
    }
    else if (this.idade == ""){
      throw new Error("Ocorreu um erro! O campo idade é obrigatório.")
    }
    else (this.especie == ""){
      throw new Error("Ocorreu um erro! O campo especie é obrigatório.")
    }
  }
}

const meuAnimal = new Animal("Fido", 3, "cachorro");
const atributos = meuAnimal.mostrarAtributos();

// Imprimindo os atributos
console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.especie); 

