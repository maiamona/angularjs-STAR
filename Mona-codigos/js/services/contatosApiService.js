angular.module("ngMessages").factory("contatosAPI", function ($http, config) {
  var _getContatos = function () {
    return $http({
      method: "GET",
      // url: 'http://localhost:3001/contatos'
      url: config.baseUrl + "/contatos",
    });
  };

  var _saveContato = function (contato) {
    return $http({
      // url: 'http://localhost:3001/contatos',
      url: config.baseUrl + "/contatos",
      method: "POST",
      data: contato,
    });
  };
  return {
    getContatos: _getContatos,
    saveContato: _saveContato,
  };
});
