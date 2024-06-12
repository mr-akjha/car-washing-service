const express = require('express');
const router = express.Router();

const app = express();

const {signup,userList} = require('../controllers/userController');
const {createPlan,planList} = require('../controllers/planController');

const {signupValidations} = require('../request-validators/user-validations');
const {validateSavePlan} = require('../request-validators/plan-validations');

/** User routes  */
/**
 * Method POST
 * URI /api/signup
 * To register new user
 */

router.post('/signup',signupValidations(),signup);

/**
 * Method GET
 * URI /api/user-list
 * To get the list of users
 */
router.get('/user-list',userList);



/** Plan routes  */

/** 
 * Method POST
 * URI /api//save-plan
 * To create a new plan 
 */
router.post('/save-plan',validateSavePlan(),createPlan);

/**
 * Method GET
 * URL /api/plan-list
 * To get the list of all plans
 */
router.get('/plan-list',planList)


module.exports = router;