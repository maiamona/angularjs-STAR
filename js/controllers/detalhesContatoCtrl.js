angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato) {

	$scope.contato = contato.data;
	// console.log($scope.contato);
});