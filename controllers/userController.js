const { saveUser, allUsers, getUser, update } = require("../app/userService");

const { validationResult } = require("express-validator");

const signup = async (request, response) => {
  const error = validationResult(request);
  if (!error.isEmpty()) {
    return response.status(422).json(error);
  }

  let requestBody = request.body;
  let user = await saveUser(requestBody);
  return response.status(200).json(user);
};

const userList = async (request, response) => {
  let users = await allUsers();
  return response.status(200).json(users);
};

const showUser = async (request, response) => {
  let userId = request.params.userId;
  let user = await getUser(userId);
  return response.status(200).json(user);
};

const updateUser = async (request, response) => {
  let userId = request.params.userId;
  let requestData = request.body;
  let user = await update(userId, requestData);
  return response.status(200).json(user);
};

module.exports = {
  signup,
  userList,
  getUser,
  showUser,
  updateUser,
};
