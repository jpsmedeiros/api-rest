CREATE TABLE payfaster.pagamentos (
    id int NOT NULL AUTO_INCREMENT,
    forma_de_pagamento NOT NULL varchar(25),
    valor NOT NULL decimal(10,2),
    moeda NOT NULL varchar(3),
    descricao varchar(255),
    status NOT NULL varchar(50),
    data DATE,

    PRIMARY KEY (id)
);