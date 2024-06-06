const mercadoService = require('../services/mercadoService');

module.exports = {
    buscarTodos: async (req, res) => {
        const mercado = await mercadoService.buscarTodos();
        res.json(mercado);

    },
    inserir: async (req, res) => {
        const json = { error: '', result: {} };
        const nome_produto = req.body.nome_produto;
        const valor = req.body.valor;
        const empresa_produto = req.body.empresa_produto;
        const forma_pagamento = req.body.forma_pagamento;

        if (nome_produto && valor && empresa_produto && forma_pagamento) {
            let id = await mercadoService.inserir(nome_produto,valor,empresa_produto,forma_pagamento);
            json.result = {
                id: id,
                nome_produto,
                valor,
                empresa_produto,
                forma_pagamento
            };
        }
        else {
            json.error = 'campos não enviados';
        }
        res.json(json);
    },
    alterar: async (req, res) => {
        const json = { error: '', result: {} };
        const id = req.params.id;
        const nome_produto = req.body.nome_produto;
        const valor = req.body.valor;
        const empresa_produto = req.body.empresa_produto;
        const forma_pagamento = req.body.forma_pagamento;

        if (nome_produto && valor&& empresa_produto&& forma_pagamento) {
            await mercadoService.alterar(id, nome_produto,valor, empresa_produto, forma_pagamento);
            json.result = {
                id,
                nome_produto,
                valor,
                empresa_produto,forma_pagamento
            };
        } else {
            json.error = 'campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req,res) =>{
        const json = {error: '',result:{}};

        await mercadoService.excluir(req.params.id);

        res.json('ok')
    },
    buscarUm: async (req,res) =>{
        const json = {error: '', result:{}};
        const id = req.params.id;
        const mercado = await mercadoService.buscarUm(id);

        if(mercado){
            json.result = mercado;
        }
        res.json(json);
    }
}