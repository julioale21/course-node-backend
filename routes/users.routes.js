const { Router } = require('express');

const Role = require('../models/role');

const { 
    usersGet, 
    usersPost, 
    usersPut, 
    usersDelete, 
    usersPatch 
} = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', usersGet);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password is required and must be al least 6 characters').isLength({ min: 6 }),
    check('role').custom(async( role = '') => {
        const existsRole = await Role.findOne({ role });
        if (!existsRole) throw new Error(`The role ${role} does not exists in BD`)
    }),
    validateFields,
], usersPost);

router.put('/:id', usersPut);

router.delete('/:id', usersDelete);

router.patch('/:id', usersPatch);


module.exports = router;