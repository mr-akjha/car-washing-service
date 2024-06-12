const Plan = require('../models/plan');

const savePlan = async (insertData) => {
    
    return await Plan.create(insertData);
}

const allPlans = async () => {
    return await Plan.findAll();
}

module.exports ={
    savePlan,
    allPlans
}