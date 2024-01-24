const { DataTypes } = require('sequelize');
const sequelize = require("../configdb");

const Usuario = sequelize.define('Usuario', {
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Usuario;