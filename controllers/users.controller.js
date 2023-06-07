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

    const salt = bycript.genSaltSync();
    user.password = bycript.hashSync(password, salt);

    await user.save();

    res.json({
        msg: 'users POST',
        user
    });
}

const usersPut = async (req = request, res = response ) => {

    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if ( password ) {
        const salt = bycript.genSaltSync();
        rest.password = bycript.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate( id, rest, { new: true } );

    res.json({
        msg: 'users PUT',
        user
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