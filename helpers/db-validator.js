const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async( role = '') => {
    const existsRole = await Role.findOne({ role });
    if (!existsRole) throw new Error(`The role ${role} does not exists in BD`)
}

const emailExists = async( email ) => {
    const exixtingEmail = await User.findOne({ email });

    if (exixtingEmail) throw new Error('The email already exists');
}

const userByIdExists = async( id ) => {
    const userExists = await User.findById( id );

    if (!userExists) throw new Error('User does not exists');
}

module.exports = {
    isValidRole,
    emailExists,
    userByIdExists
}