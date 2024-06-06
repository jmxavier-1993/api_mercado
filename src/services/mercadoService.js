const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM mercado', (error, results) => {

                if (error) {
                    rejeitando(error);
                    return;
                }

                aceito(results);
            });
        });
    },
    inserir: (nome_produto, valor, empresa_produto, forma_pagamento) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO mercado (nome_produto, valor, empresa_produto, forma_pagamento, data_criacao, data_atualizacao) VALUES (?,?,?,?,?, ?)',
                [nome_produto, valor, empresa_produto, forma_pagamento, new Date(), new Date()],
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
                })
        })
    },

    alterar: (id, nome_produto, valor, empresa_produto, forma_pagamento) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE mercado SET nome_produto = ?, valor = ?, empresa_produto = ?, forma_pagamento = ?, data_atualizacao = ?  WHERE id = ?',
                [nome_produto, valor, empresa_produto, forma_pagamento, new Date(), id],
                (error, results) => {

                    if (error) {
                        rejeitado(error);
                        return;
                    }

                    aceito(results)
                }
            );
        });
    },
    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM mercado WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error); return;
                }
                aceito('ok');
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM mercado WHERE id = ?', [id], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                }
                else {
                    aceito(false);
                }
            });
        });
    }
};