const db = require('../../data/dbConfig');

module.exports = {
    find,
    insert,
    findBy,
}

function find(){
    return db('users');
}

function insert(user){
    return db('users').insert(user);
}

function findBy(id){
    return db('users').where(id, 'id');
}