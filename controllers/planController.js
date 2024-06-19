const {savePlan,allPlans,getPlan,update} = require('../app/planService');

const { validationResult } = require('express-validator');

const {Plan} = require("../models");

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

const showPlan = async (request,response) => {
    let plan  = await getPlan(request.params.planId);
    return  response.status(200).json(plan);
}

const updatePlan = async(request,response) => {
    let requestBody = request.body;
    let planId = request.params.planId;
    let plan = await update(planId,requestBody);

    if (plan instanceof Plan) {
        return response.status(200).json(plan);
    }
    
    return response.status(500).json({error:"Plan Not Found !"});
}

module.exports = {
    createPlan,
    planList,
    showPlan,
    updatePlan
}