const User = require('../models/user');


const saveUser = async (insertData) => {
    
    return await User.create(insertData);
}

const allUsers = async () => {
    return await User.findAll();
}

module.exports ={
    saveUser,
    allUsers
}