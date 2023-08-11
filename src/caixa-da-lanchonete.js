class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const pagamento = ["dinheiro","debito","credito"]
        const cardapio = ["cafe","chantily","suco","sanduiche","queijo","salgado","combo1","combo2"]
        const valores = [3.00, 1.50, 6.20, 6.50, 2.00, 7.25, 9.50, 7.50]
        const dor = "i"+itens;

        

        if(!pagamento.includes(metodoDePagamento)){
            return "Forma de pagamento inválida!";
        }
        if (dor === 'i'){
            return "Não há itens no carrinho de compra!";
        }
        
        const pedido = [];
        const quantidade = [];
  
        for (const item of itens) {
            const partes = item.split(',');
            pedido.push(partes[0]);
            quantidade.push(parseInt(partes[1]));
        }

        if(pedido.includes('chantily') && !pedido.includes('cafe')){
            return "Item extra não pode ser pedido sem o principal";
        }
        if(pedido.includes('queijo') && !pedido.includes('sanduiche')){
            return "Item extra não pode ser pedido sem o principal";
        }
        for(let i=0;i<pedido.length;i++){
            if(!cardapio.includes(pedido[i])){
                return "Item inválido!"
            }
        }
        for(let i=0;i<quantidade.length;i++){
            if(quantidade[i] === 0){
                return "Quantidade inválida!";
            }
        }
        let total = 0;
        for (let i = 0; i < cardapio.length; i++){
            for(let j =0; j<pedido.length; j++){
                if(pedido[j] === cardapio[i]){
                    total += (valores[i] * quantidade[j])
                }
            }
        }
        
        if(metodoDePagamento === pagamento[0]){
            total = total * 0.95;
        }
        if(metodoDePagamento === pagamento[2]){
            total = total * 1.03;
        }
        const totalText = total.toFixed(2);
        const text = totalText.toString();
        return "R$ " + text.replace('.',',');


    }

}

export { CaixaDaLanchonete };
