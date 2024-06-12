const {savePlan,allPlans} = require('../app/planService');

const createPlan =  async (request,response) => {
    let requestBody = request.body;
    let plan = await savePlan(requestBody);
    response.status(200).json(plan);
}

const planList = async(request,response) =>{
    let plans = await allPlans();
    response.status(200).json(plans);
}

module.exports = {
    createPlan,
    planList
}