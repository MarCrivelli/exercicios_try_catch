/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try{
      return this.atributos();
    }
    catch{
      console.log(erro.Stack)
    }
  }

  atributos() {
    if(this.nome != "" & this.idade != "" & this.turma != ""){
      return 
        this.nome, this.idade, this.turma;
      }
      else if (this.nome == ""){
        throw new Error("Ocorreu um erro! O campo nome é obrigatório.")
      }
      else if (this.idade == ""){
        throw new Error("Ocorreu um erro! O campo idade é obrigatório.")
      }
      else (this.turma == ""){
        throw new Error("Ocorreu um erro! O campo turma é obrigatório.")
      }
    }
}

const estudante = new Estudante("João", 16, "3A");

const atributos = estudante.mostrarAtributos();

console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.turma); 

