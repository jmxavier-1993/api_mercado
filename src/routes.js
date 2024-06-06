const express = require ('express');
const router = express.Router();

const mercadoControle = require('./controles/mercado.controle');

router.get('/mercado', mercadoControle.buscarTodos);
router.get('/mercado/:id',mercadoControle.buscarUm)
router.post('/mercado',mercadoControle.inserir);
router.put('/mercado/:id',mercadoControle.alterar);
router.delete('/mercado/:id',mercadoControle.excluir);

module.exports = router;