var pedro = {
  nome: "pedro",
  idade: 16,
};

console.log(pedro);

// FActory Function (função factory)

var criarPessoa = function (nome, idade) {
  return {
    nome: nome,
    idade: idade,
  };
};

var maria = criarPessoa("maria", 20);

console.log(maria);

// Constructor Function (função construtora)
var Pessoa = function (nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

// var carlos = {};
// Pessoa.call(carlos, "Carlos", 25);

var carlos = new Pessoa("Carlos", 25);
console.log(carlos);
