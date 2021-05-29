# Desafio  -  https://desafio-klutch.vercel.app/

Você foi *desafiado* a desenvolver uma parte do fluxo de um sistema de empréstimos, basicamente a parte de cadastro de uma solicitação de empréstimo e a visualização da mesma.

**Obrigatório:**

- [ ]  O valor da solicitação deve ser maior que 300,00 e menor que 10.000,00
- [ ]  Você deve pegar as tabelas das Taxas de um arquivo api.json
- [ ]  A busca do cliente também deve ser feita no objeto api.json, pode ser usado libs como o lodash
- [ ]  Ao cadastrar um empréstimo, o objeto do api.json deve ser alterado, adicionando um novo empréstimo em `solicitations`
- [ ]  A tela de empréstimo deve pegar o id a partir da URL e fazer uma requisição no backend para   baixar os detalhes do mesmo ex: localhost:3000/emprestim/{{idEmprestimo}}
- [ ]  Usar Typescript

***Opcionais (mas dá pontos extras):***

- [ ]  Construir a interface exatamente conforme os layouts do XD
- [ ]  Construir a interface com animações (de sua escolha)
- [ ]  Realizar testes de automação
- [ ]  Criar uma tela para listar suas solicitações de empréstimos
- [ ]  Implementar o anexo de imagens em algum servidor como o firebase, Aws, ou qualquer outro de sua preferência
- [ ]  Usar o Redux para controlar os estados da sua aplicação e salvar os dados do usuário
- [ ]  Desenvolver o projeto usando NextJs/NuxtJS

**Instrução técnica:**
Fique a vontade para manipular esse arquivo api.json caso ache necessário.

**Entrega do projeto:**

Você deve hospedar o seu projeto em em alguma plataforma de sua preferencia (netlify, firebase, Heroku)

O projeto deve ser entregue em um único arquivo compactado (zip, tar.gz, etc) ou um repositório no gitHub e nos retransmitir o link, contendo seu código e versionamento (diretório .git).

É imprescindível que seu repositório tenha instruções sobre como o projeto deve ser executado, incluindo  versões e bibliotecas.

```json
// sugestao de api.json, voce pode modificar oq quiser desse objeto para facilitar os fluxos
{
  "rateTable": [
    {
      "id": 1,
      "name": "tabela 1",
      "installments": [
        {
          "id": 1,
          "installments": 1,
          "installmentInterest": 100,
          "installmentValue": 444.00,
          "fullValue": 444.00,
          "comission": 1.33
        },
        {
          "id": 2,
          "installments": 2,
          "installmentInterest": 20.5,
          "installmentValue": 1338.76,
          "fullValue": 2677.51,
          "comission": 455.51
        }
      ]
    },
    {
      "id": 2,
      "name": "tabela 2",
      "installments": [
        {
          "id": 3,
          "installments": 1,
          "installmentInterest": 10,
          "installmentValue": 22.00,
          "fullValue": 224.00,
          "comission": 1.33
        },
        {
          "id": 4,
          "installments": 2,
          "installmentInterest": 20.5,
          "installmentValue": 2.76,
          "fullValue": 9.51,
          "comission": 3.51
        }
      ]
    }
  ],
  "client": [
    {
      "id": 1,
      "name": "Teste Cliente",
      "phone": "71999999999",
      "cpf": "9999999999",
      "bank": {
        "label": "003 - Banco da Amazonia S.A.",
        "accountTypeLabel": "Conta Corrente",
        "accountNumber": "378282246310005"
      }
    },
    {
      "id": 1,
      "name": "Teste Cliente",
      "phone": "71222222222",
      "cpf": "2222222229",
      "bank": {
        "label": "003 - Banco da Amazonia S.A.",
        "accountTypeLabel": "Conta Corrente",
        "accountNumber": "378282246310005"
      }
    }
  ],
  "solicitation": [
    {
      "id": 1,
      "clientId": 1,
      "installmentInterest": 20.5,
      "installmentInterestValue": 20.5,
      "comission": 5.5,
      "comissionValue": 122.21,
      "installmentValue": 1338.76,
      "cardNumber": "4012001037141112",
      "desiredValue": 2222,
      "totalLoan": 2677.51,
      "installmentId": 4,
      "rateTableId": 2
    }
  ]
}
```

**LINK DO Figma:** 
***
https://www.figma.com/file/zNME3cBBFhoAvojyhS4z82/desafio?node-id=0%3A1

