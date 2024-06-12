const { response } = require('express');
const {saveUser, allUsers } = require('../app/userService');

const { validationResult } = require('express-validator');

const signup = async (request,response) => {

    const error = validationResult(request);
    if (! error.isEmpty()) {
        return response.status(422).json(error);
    }

    let requestBody =  request.body;
    let user =  await saveUser(requestBody);
    return response.status(200).json(user);
};

const userList = async (request,response) => {
    let users =  await allUsers();
    return response.status(200).json(users);
};

module.exports = {
    signup,
    userList
}