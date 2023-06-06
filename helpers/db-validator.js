const Role = require('../models/role');

const isValidRole = async( role = '') => {
    const existsRole = await Role.findOne({ role });
    if (!existsRole) throw new Error(`The role ${role} does not exists in BD`)
}

module.exports = {
    isValidRole
}