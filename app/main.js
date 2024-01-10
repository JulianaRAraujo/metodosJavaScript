// criou uma variavel let para receber a requisicao .

let livros = [];

// criou uma variavel const  para receber o endereço
const endpointDaApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

//get para ele de fato fazer a requisição e buscar os livros da API
getBuscarLivrosDaAPI();


//função seja assíncrona. async function getBuscaLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
  const resp = await fetch(endpointDaApi);
  livros = await resp.json();
  let livrosComDesconto = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosComDesconto);
}

