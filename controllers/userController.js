const { response } = require('express');
const {saveUser, allUsers } = require('../app/userService');

const signup = async (request,response) => {
    let requestBody =  request.body;
    let user =  await saveUser(requestBody);
    response.status(200).json(user);
};

const userList = async (request,response) => {
    let users =  await allUsers();
    response.status(200).json(users);
};

module.exports = {
    signup,
    userList
}