
module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log("Recebida requisição de teste na porta 3000.")
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', function(req, res){

        var pagamento = req.body;
        pagamento.status = "CRIADO";
        pagamento.data = new Date;

        var erros = validaPagamento(req);

        if(erros){
            res.status(400).send(erros);
            return;
        }

        
        console.log('processando novo pagamento');

        var connection = app.persistence.connectionFactory();
        var pagamentoDao = new app.persistence.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(erro, resultado){
            if(erro){
                console.log("erro ao inserir no banco:" + erro);
                res.status(500).send(erro);
            } else{
                console.log("pagamento criado");
                res.location("/pagamentos/pagamento/" +
                    resultado.insertId);
                res.status(201).json(pagamento);
            }
        });
    });

    function validaPagamento(req){
        // TODO realizar verificações de tamanho e demais verificações
        req.assert("forma_de_pagamento", 
            "Forma de pagamento é obrigatória").notEmpty();
        req.assert("valor", "Valor é obrigatório e deve ser um decimal").notEmpty().isFloat();
        req.assert("moeda", 
            "moeda é obrigatória").notEmpty();
        req.assert("status", 
        "status é obrigatório").notEmpty();
        var erros = req.validationErrors();

        if(erros){
            console.log("erros de validação encontrados");
        }
        return erros;
    }

    function enviaStatus(res, status, msg){
        
    }
}