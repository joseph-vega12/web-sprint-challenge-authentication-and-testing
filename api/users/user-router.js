const express = require('express');
const router = express.Router();

const Users = require('./user-model');

router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch(err) {
        res.json({message: err.message});
    }
})

module.exports = router;