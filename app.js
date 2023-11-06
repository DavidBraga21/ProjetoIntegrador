// app.js
const express = require('express');
const mysql = require('mysql');
const restaurantesRouter = require('./restaurantes');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mesafacil'
});

// Conexão com o banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão estabelecida com o banco de dados');
  }
});

// Middleware para adicionar a conexão do banco de dados em cada requisição
app.use((req, res, next) => {
  req.connection = connection;
  next();
});

// Rota inicial
app.get('/', (req, res) => {
  res.send('API de Restaurantes');
});

// Rotas para os restaurantes


app.get('/restaurantes', (req, res) => {
  const sql = 'SELECT * FROM restaurantes';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro ao obter os restaurantes' });
    } else {
      res.json(results);
    }
  });
});


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});