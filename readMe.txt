Olá!

Orientações:

    Devido o id de nossas classes serem UUID, será necessário replica-las assim que gerar os seed's para popular o banco de dados,
para que nossas requests no postman funcionem; Inclusive no gerar a tabela de tenancy, ao utilizar as chaves estrangeiras;

No mais, execute nosso projeto rodando no terminal:
    -yarn typeorm:run
    -yarn typeorm-seed:create
    -yarn start:dev