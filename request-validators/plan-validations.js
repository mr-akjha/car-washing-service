const {check} = require('express-validator');

const validateSavePlan = () => {
    return [
        check('name',"Name is required").notEmpty(),
        check('amount',"Amount is required in decimal").isDecimal(  {decimal_digits: "2",force_decimal: true}),
        check('duration_in_month',"Please enter a valid plan durations").isInt(),
    ]
}


module.exports ={
    validateSavePlan
}