const { Plan } = require("../models");

/**
 * Method to create plan
 * @param {object} insertData 
 * @returns Plan
 */
const savePlan = async (insertData) => {
  return await Plan.create(insertData);
};

/**
 * Method to get the list of plans
 * @returns object of Plans
 */
const allPlans = async () => {
  return await Plan.findAll();
};

/**
 * Method to get the plan 
 * @param {string} planId 
 * @returns Plan
 */
const getPlan = async (planId) => {
  return await Plan.findByPk(planId);
};

/**
 * Method to update the Plan
 * @param {string} planId 
 * @param {object} requestData 
 * @returns 
 */
const update = async (planId, requestData) => {
  const plan = await Plan.findByPk(planId);
  if (plan instanceof Plan) {
    let updatedPlan = await plan.update(requestData);
    return updatedPlan;
  }

  return {};
};

module.exports = {
  savePlan,
  allPlans,
  getPlan,
  update,
};
