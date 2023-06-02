const { request, response } = require('express');

const usersGet = (req = request, res = response ) => {
    res.json({
        msg: 'users GET'
    });
}

const usersPost = (req = request, res = response ) => {
    res.json({
        msg: 'users POST'
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