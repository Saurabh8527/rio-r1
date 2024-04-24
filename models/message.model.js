const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    const Message = sequelize.define('Message', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        receiver_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM,
            values: ['unread', 'read'],
            allowNull: false,
            defaultValue: 'unread'
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return Message;
};