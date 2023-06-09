const { request, response } = require('express');
const bycript = require('bcrypt');

const User = require('../models/user');
const { generateJWT } = require('../helpers/generate-jwt');


const login = async (req = request, res = response ) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: 'User/ Password are not correct - email'
            });
        };

        if (!user.status) {
            return res.status(400).json({
                msg: 'User/ Password are not correct - status: false'
            });
        };

        const validPassword = bycript.compareSync( password, user.password );

        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'User/ Password are not correct - password'
            });
        }

        const token = await generateJWT( user.id );

        res.json({
            msg: 'Login ok',
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ask for admin support'
        })
    }
}


module.exports = {
    login
}