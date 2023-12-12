angular.module("ngMessages").filter("name", function () {
    return function (input) {
        // console.log(input);
        
      var listaDeNomes = input.split(" ");
     var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
      //  if (nome === "DA" || nome === "DE") return nome.charAt(0).toLowerCase() + nome.substring(1).toLowerCase();
       if (/(DA|DE)/.test(nome)) return nome.charAt(0).toLowerCase() + nome.substring(1).toLowerCase();
        return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
      });
      // console.log(listaDeNomesFormatada);
      // return input;
      return listaDeNomesFormatada.join(" ");// colocar espaços em branco dentro do ARRAY
    };
});