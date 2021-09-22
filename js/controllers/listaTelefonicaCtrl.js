angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator, $filter) {
	$scope.app = $filter('upper')("Lista Telefonica");
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;
	// $scope.imposto = 1.2; => 20%

	var init = function () {
		calcularImpostos($scope.contatos);
		generateSerial($scope.contatos);
		// $scope.contatos.push($scope.contatos[0]);
	};

	var calcularImpostos = function (contatos) {
		contatos.forEach(function (contato) {
			contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
		});
	}

	var generateSerial = function (contatos) {
		contatos.forEach(function (item) {
			item.serial = serialGenerator.generate();
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
		$scope.verificarContatoSelecionado($scope.contatos);	
	};

	// var counter = 0;

	// $scope.isContatoSelecionado = function (contatos) {
	$scope.verificarContatoSelecionado = function (contatos) {
		// console.log(counter++);

		// return contatos.some(function (contato) {
		$scope.hasContatoSelecionado = contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	// var counter = 0;
	// $scope.calcularImposto = function (preco) {
	var calcularImposto = function (preco) {
		// console.log(counter++);
		var imposto = 1.2;
		return preco * imposto;
	};

	$scope.reset = function () {
		$scope.contatos = angular.copy($scope.contatos);
		location.reload();
	};
	
	init();
	
	// generateSerial($scope.contatos);
});