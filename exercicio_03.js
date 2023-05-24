class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try{
      return this.atributos();
    }
    catch{
      console.log(erro.Stack)
    }
  }

  atributos() {
    if(this.estudante != "" & this.cosplay != "" & this.nota_cosplay != ""){
      return 
        this.estudante, this.cosplay, this.nota_cosplay;
      }
      else if (this.estudante == ""){
        throw new Error("Ocorreu um erro! O campo estudante é obrigatório.")
      }
      else if (this.cosplay == ""){
        throw new Error("Ocorreu um erro! O campo cosplay é obrigatório.")
      }
      else (this.nota_cosplay == ""){
        throw new Error("Ocorreu um erro! O campo nota_cosplay é obrigatório.")
      }
    }
}

const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);

