const { User } = require("../models/db");

const createUser = async (firstName, lastName, mobile) => {
    return User.create({ first_name: firstName, last_name: lastName, mobile: mobile });
}

const getAllUsers = async () => {
    return User.findAll({ raw: true })
}

module.exports = {
    getAllUsers,
    createUser
}