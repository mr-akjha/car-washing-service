const {savePlan,allPlans} = require('../app/planService');

const { validationResult } = require('express-validator');

const createPlan =  async (request,response,next) => {

    const error = validationResult(request);
    console.log("error : ".error," Is Empty ",error.isEmpty());
    if (! error.isEmpty()) {
        return response.status(422).json(error).end();
    }

    let requestBody = request.body;
    let plan = await savePlan(requestBody);
    return response.status(200).json(plan);
}

const planList = async(request,response) =>{
    let plans = await allPlans();
    return response.status(200).json(plans);
}

module.exports = {
    createPlan,
    planList
}