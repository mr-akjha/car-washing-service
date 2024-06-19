const { validationResult } = require('express-validator');


const validator = (request,response, next) => {
    const error = validationResult(request);
    if (! error.isEmpty()) {
        response.status(422).json(error);
    }
    next();
}
module.exports = {
    validator
}