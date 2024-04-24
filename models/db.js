const { Sequelize } = require('sequelize')
const { join } = require('path')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: join(__dirname, 'database.sqlite'),
})

const User = require('./user.model')(sequelize)
const Message = require('./message.model')(sequelize)

module.exports = {
    sequelize,
    User,
    Message
}