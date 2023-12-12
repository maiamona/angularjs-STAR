angular.module("ngMessages").controller("listaTelefonica", function ($scope, $filter, uppercaseFilter, $http, contatosAPI, operadorasAPI, serialGenerator) {
            // console.log(serialGenerator.generate());
            $scope.message = "Lista Telefónica";  
            // $scope.contatos = [
            // {nome: $filter('uppercase')("Menito"), telefone: "99998888", data: new Date(), operadora: {nome: "UNITEL", codigo: 11, categoria: "Celular"}},
            // {nome: uppercaseFilter("Menito"), telefone: "99998888", data: new Date(), operadora: {nome: "UNITEL", codigo: 11, categoria: "Celular"}},
            // {nome: "Mona", telefone: "923744720", data: new Date(), operadora: {nome: "Telecom", codigo: 12, categoria: "Celular e Internet"}},
            // {nome: "Lucy", telefone: "33333344", data: new Date(), operadora: {nome: "TVCABO", codigo: 13, categoria: "TV e CABO"}}   
            // {nome: "Menito", telefone: "99998888", cor: "blue"},
            // {nome: "Mona", telefone: "923744720", cor: "red"},
            // {nome: "Lucy", telefone: "33333344", cor: "orange"}
            // ];
            $scope.contatos = [];
            //     $scope.operadoras = [
            // {nome: "UNITEL", codigo: 14, categoria: "Celular", preco: 2},
            // {nome: "Movicel", codigo: 15, categoria: "Celular", preco: 3},
            // {nome: "Telecom", codigo: 16, categoria: "Celular e Internet", preco: 4},
            // {nome: "ZAP", codigo: 17, categoria: "TV e FIBRA OPTICA", preco: 5},
            // {nome: "TVCABO", codigo: 18, categoria: "TV e CABO", preco: 6}
            //     ];
            $scope.operadoras = [];
            $scope.contato = {
                data: 27080351925000,
            };

            var carregarContatos = function () {
                // $http.get("http://localhost:3001/contatos").success(function (data, status) {
                //     console.log(data);
                // });
                contatosAPI.getContatos().then(
                    function (response) {
                        $scope.contatos = response.data;
                        // console.log(response.data);
                    },
                    function (error) {
                        //   $scope.message2 = "Aconteceu um erro status: " + error.status + ", statusText: " + error.statusText;
                        // console.log(error)
                        error.name = "não foi possivel carregar os dados";
                        $scope.errado = error.name;
                    }
                );
            };

            var carregarOperadoras = function () {
                operadorasAPI.getOperadoras().then(
                    function (response) {
                        $scope.operadoras = response.data;
                        // console.log(response.data);
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            };

            $scope.adicionarContato = function (contato) {
                contato.serial = serialGenerator.generate();
                contato.data = new Date();
                // $scope.contatos.push(angular.copy(contato));
                contatosAPI.saveContato(contato).then(
                    function (response) {
                        // success
                        delete $scope.contato;
                        $scope.contatoForm.$setPristine();
                        carregarContatos();
                    },
                    function (erro) {
                        // optional
                        // failed
                        console.log(erro);
                    }
                );

                // delete $scope.contato;
                // $scope.contatoForm.$setPristine();
            };
            $scope.apagarContato = function (contatos) {
                $scope.contatos = contatos.filter(function (contato) {
                    if (!contato.selecionado) return contato;
                });
            };
            $scope.isContatoSelecionado = function (contatos) {
                return contatos.some(function (contato) {
                    return contato.selecionado;
                });
            };
            $scope.ordenarPor = function (campo) {
                $scope.criterioDeOrdenacao = campo;
                $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
            };
            carregarContatos();
            carregarOperadoras();
        }
    );
