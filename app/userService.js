const {User} = require('../models');
/**
 * Method to save user 
 * @param {object} insertData 
 * @returns User
 */
const saveUser = async (insertData) => {
    
    return await User.create(insertData);
}

/**
 * Method to load the list of users
 * @returns object of users
 */
const allUsers = async () => {
    return await User.findAll();
}

/**
 * Method to get the user record by primary key
 * @param {string} userId 
 * @returns User
 */
const getUser = async (userId) => {
    return await User.findByPk(userId);
}

/**
 * Method to update the user record
 * @param {string} userId 
 * @param {object} requestData 
 * @returns User
 */
const update = async (userId , requestData) => {
    let user = await getUser(userId);
    if (user instanceof User) 
    {
        let updatedUser = user.update(requestData);    
        return updatedUser;
    }
    
    return {}
}

module.exports ={
    saveUser,
    allUsers,
    getUser,
    update
}