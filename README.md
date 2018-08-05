# api-rest
Desenvolvendo uma API no estilo REST utilizando o node.js


## Instructions
- Instale o node
- Instale o npm
- Instale o MySQL
    - Crie um usuário chamado "<b>username</b>" com a senha "<b>password</b>" (Ou altere o connectionFactory para o nome e senha desejados)
    - Crie uma Database chamado "<b>payfaster</b>"
    - Crie as tabelas do arquivo <b>./files/tabelas.sql</b>
- (Optional) instale o nodemon. 
- Run de command <b>node index.js</b> (Ou nodemon index.js)


--> Inserir pagamento: 
- curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamento.json | json_pp