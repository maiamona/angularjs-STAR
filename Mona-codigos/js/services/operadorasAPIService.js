angular.module("ngMessages").service("operadorasAPI", function ($http, config) {
  this.getOperadoras = function () {
    return $http({
      method: "GET",
      // url: 'http://localhost:3001/operadoras'

      url: config.baseUrl + "/operadoras",
    });
  };
});
