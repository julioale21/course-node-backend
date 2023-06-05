const { request, response } = require('express');
const User = require('../models/user');

const usersGet = (req = request, res = response ) => {
    res.json({
        msg: 'users GET'
    });
}

const usersPost = async (req = request, res = response ) => {
    const user = new User(req.body);

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