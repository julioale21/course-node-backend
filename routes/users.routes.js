const { Router } = require('express');

const router = Router();

const { 
    usersGet, 
    usersPost, 
    usersPut, 
    usersDelete, 
    usersPatch 
} = require('../controllers/users.controller');

router.get('/', usersGet);
router.post('/:id', usersPost);
router.put('/:id', usersPut);
router.delete('/:id', usersDelete);
router.patch('/:id', usersPatch);


module.exports = Router;