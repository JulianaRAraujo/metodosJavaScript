const btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco);


function ordenarLivrosPorPreco(){
    let livrosOrdenardos=  livros.sort((a, b) => a.preco -b.preco);
    exibirOsLivrosNaTela(livrosOrdenardos)
     
}