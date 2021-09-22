var router = require("./router");

var app = router(3001);

var operadoras = [
  //   {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
  //   {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
  //   {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}
  { nome: "UNITEL", codigo: 14, categoria: "Celular", preco: 2 },
  { nome: "Movicel", codigo: 15, categoria: "Celular", preco: 3 },
  { nome: "Telecom", codigo: 16, categoria: "Celular e Internet", preco: 4 },
  { nome: "ZAP", codigo: 17, categoria: "TV e FIBRA OPTICA", preco: 5 },
  { nome: "TVCABO", codigo: 18, categoria: "TV e CABO", preco: 6 },
];

var contatos = [
  //   {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: operadoras[0]},
  //   {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: operadoras[1]},
  //   {id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: operadoras[2]}
  { nome: "MENITO GARCIA", telefone: "99998888", data: new Date(), operadora: operadoras[0], serial: "Y2115" },
  { nome: "MONA GARCIA", telefone: "923744720", data: new Date(), operadora: operadoras[1], serial: "0%IT" },
  { nome: "LUCY GARCIA", telefone: "33333344", data: new Date(), operadora: operadoras[2], serial: "2>S@]" },
  { nome: "MARIA DE FÁTIMA", telefone: "77777744", data: new Date(), operadora: operadoras[3], serial: "3>S@]" },
  { nome: "MARIA DA CONCEIÇÃO", telefone: "7779999", data: new Date(), operadora: operadoras[4], serial: "4>S@]" }
];

app.interceptor(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.interceptor(function (req, res, next) {
  res.setHeader("Content-Type", "application/json;charset=UTF-8");
  next();
});

app.get("/operadoras", function (req, res) {
  res.write(JSON.stringify(operadoras));
  res.end();
});

app.get("/contatos", function (req, res) {
  res.write(JSON.stringify(contatos));
  res.end();
});

app.post("/contatos", function (req, res) {
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});

app.post("/file", function (req, res) {
  console.log(req.body);
  res.end();
});

app.options("/file", function (req, res) {
  res.end();
});

app.options("/contatos", function (req, res) {
  res.end();
});
