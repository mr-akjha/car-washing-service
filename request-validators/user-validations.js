const {check} = require('express-validator');

const signupValidations = () => {
    return [
        check('name',"Name is required").notEmpty(),
        check('phone_number',"Phone Number is required").notEmpty(),
        check('email',"Please enter a valid email address").isEmail(),
        check('password',"Please enter an alphanumeric password of minimum 6 words").isLength({min:6}),

    ]
}


module.exports ={
    signupValidations
}