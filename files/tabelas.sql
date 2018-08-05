CREATE TABLE payfaster.pagamentos (
    id int NOT NULL AUTO_INCREMENT,
    forma_de_pagamento varchar(25),
    valor decimal(15,2),
    moeda varchar(3),
    descricao varchar(255),
    status varchar(50),
    data DATE,

    PRIMARY KEY (id)
);