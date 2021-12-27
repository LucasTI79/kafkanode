# Micro-serviços com Node.js

- Utilizando Kafta;
- Utilizando Node;

## Aplicações

- API principal (Station);
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serciço de certificado devolve uma resposta(síncrona/assíncrona);
  
Se conseguir síncrona/assíncrona;

- Receber uma resposta assíncrona de quando o email com certificado foi enviado;