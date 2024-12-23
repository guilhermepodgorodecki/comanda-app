// Simulação dos dados do banco de dados
const pedidos = [
    { id: 1, numeroPedido: 23082, idProduto: 1, preco: 105.0, pagamento: "Dinheiro" },
    { id: 3, numeroPedido: 70271, idProduto: 1, preco: 105.0, pagamento: "Cartão de Crédito" }
];

const mensagem = "Estes foram os pedidos encontrados para o usuário: Pedro";

// Função para exibir os pedidos na tabela
function exibirPedidos() {
    // Exibe a mensagem
    document.getElementById("mensagem").innerText = mensagem;

    // Preenche a tabela com os pedidos
    const corpoTabela = document.getElementById("corpo-tabela");
    pedidos.forEach(pedido => {
        const row = document.createElement("tr");

        const cellId = document.createElement("td");
        cellId.innerText = pedido.id;
        row.appendChild(cellId);

        const cellNumeroPedido = document.createElement("td");
        cellNumeroPedido.innerText = pedido.numeroPedido;
        row.appendChild(cellNumeroPedido);

        const cellProduto = document.createElement("td");
        cellProduto.innerText = pedido.idProduto;
        row.appendChild(cellProduto);

        const cellPreco = document.createElement("td");
        cellPreco.innerText = `R$ ${pedido.preco.toFixed(2)}`;
        row.appendChild(cellPreco);

        const cellPagamento = document.createElement("td");
        cellPagamento.innerText = pedido.pagamento;
        row.appendChild(cellPagamento);

        corpoTabela.appendChild(row);
    });
}

// Chama a função para exibir os pedidos ao carregar a página
window.onload = exibirPedidos;
