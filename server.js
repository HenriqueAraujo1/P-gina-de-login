const express = require('express'); //importando o express 
const bodyParser = require('body-parser'); // importando o body-parser para lidar com requisições 
const app = express();
const PORT = 3000; // porta que meu servidor escuta 

// Middleware para servir arquivos estáticos
app.use(express.static('public')); // com esse comando eu consigo direcionar para outras pastas
app.use(bodyParser.urlencoded({ extended: true })); 

// colocando os dados do usuario que deveria ser no BD em uma variável, objeto
const fixedUser = {
    email: 'henriquearaujo@gmail.com', email: 'henrique@gmail.com',
    password: 'apenastestes'  // email e senha do usuario
};

// Rota para o login
app.post('/login', (req, res) => { 
    const { email, password } = req.body;

    if (email === fixedUser.email && password === fixedUser.password) {
        res.redirect('/loginsucess.html'); // Redireciona para a página loginsucess.html
    } else {
        res.redirect('/erro.html'); // Redireciona para a página de erro e voltar ao inicio, caso a senha e o email não sejam cadastrados
    }
});

// aqui o servidor escutando na porta que foi definida antes e dando um console caso esteja tudo certo
app.listen(PORT, () => {  
    console.log(`Servidor rodando na porta ${PORT}`);
});