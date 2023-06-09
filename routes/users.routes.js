const { Router } = require('express');

const { 
    usersGet, 
    usersPost, 
    usersPut, 
    usersDelete, 
} = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isValidRole, emailExists, userByIdExists } = require('../helpers/db-validator');

const router = Router();

router.get('/', usersGet);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password is required and must be al least 6 characters').isLength({ min: 6 }),
    check('role').custom(isValidRole),
    check('email').custom(emailExists),
    validateFields,
], usersPost);

router.put('/:id', [
    check('id', 'Is not a valid ID').isMongoId(),
    check('id').custom(userByIdExists),
    check('role').custom(isValidRole),
    validateFields,
] ,usersPut);

router.delete('/:id', [
    check('id', 'Is not a valid ID').isMongoId(),
    check('id').custom(userByIdExists),
    validateFields,
], usersDelete);



module.exports = router;