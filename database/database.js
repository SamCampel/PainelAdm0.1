// conexão com o banco de dados
const Sequelize = require ("sequelize");
const connection = new Sequelize('guiapress', 'root', 'senha1234',{
    host: 'localhost',
    dialect: 'mysql',
    timezone:"-03:00"
});

module.exports = connection;