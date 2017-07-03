
const Sequelize = require('sequelize')
const sequelize = require('../database')

const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    }
},
    {
        freezeTableName: false, // Model tableName will be the same as the model name
    }
)

module.exports = User