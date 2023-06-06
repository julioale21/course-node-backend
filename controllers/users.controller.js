const { request, response } = require('express');
const bycript = require('bcrypt');

const User = require('../models/user');


const usersGet = (req = request, res = response ) => {
    res.json({
        msg: 'users GET'
    });
}

const usersPost = async (req = request, res = response ) => {

    const { name, email, password, role } = req.body;

    const user = new User({
        name, 
        email,
        password,
        role
    });
    const exixtingEmail = await User.findOne({ email });

    if (exixtingEmail) return res.status(400).json({ msg: 'The email already exists.' });

    const salt = bycript.genSaltSync();
    user.password = bycript.hashSync(password, salt);

    await user.save();

    res.json({
        msg: 'users POST',
        user
    });
}

const usersPut = (req = request, res = response ) => {
    res.json({
        msg: 'users PUT'
    });
}

const usersDelete = (req = request, res = response ) => {
    res.json({
        msg: 'users DELETE'
    });
}

const usersPatch = (req = request, res = response ) => {
    res.json({
        msg: 'users PATCH'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}