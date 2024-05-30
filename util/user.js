const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../DB/database');

const Expense = sequelize.define('Expense', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'expensetrack', 
    timestamps: false
});

module.exports = Expense;
