var http = require('http');

http.createServer(function (req, res) {
	res.write(
        '<div class="jumbotron">'+
        '<table class="table">'+
           ' <tr>'+
           ' <td>{{contato.nome}}</td>'+
           ' </tr>'+
           '<tr>'+
           ' <td>{{contato.telefone}}</td>'+
           ' </tr>'+
           '<tr>'+
           ' <td>{{contato.data | date:"dd/MM/yyyy"}}</td>'+
           ' </tr>'+
           ' </table>'+
           ' <a href="#/contatos">Voltar</a>'+
           ' </div>'
	);
	res.end();
}).listen(3412);