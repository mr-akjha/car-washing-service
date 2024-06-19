const express = require("express");
const router = express.Router();

const app = express();

const {
  signup,
  userList,
  showUser,
  updateUser,
} = require("../controllers/userController");

const {
  createPlan,
  planList,
  showPlan,
  updatePlan,
} = require("../controllers/planController");

const { signupValidations } = require("../request-validators/user-validations");
const { validateSavePlan } = require("../request-validators/plan-validations");

/** User routes  */
/**
 * Method POST
 * URI /api/signup
 * To register new user
 */

router.post("/signup", signupValidations(), signup);

/**
 * Method GET
 * URI /api/user-list
 * To get the list of users
 */
router.get("/user-list", userList);

/**
 * Method GET
 * URI /api/user/:userId
 * To get the user record
 */
router.get("/user/:userId", showUser);

/**
 * Method PATCH
 * URI /api/user/:userId
 * To update the user record
 */
router.patch("/user/:userId", updateUser);


/** Plan routes  */

/**
 * Method POST
 * URI /api//save-plan
 * To create a new plan
 */
router.post("/save-plan", validateSavePlan(), createPlan);

/**
 * Method GET
 * URL /api/plan-list
 * To get the list of all plans
 */
router.get("/plan-list", planList);

/**
 * Method GET
 * URL /api/plan/:panId
 * To get the plan record
 */
router.get("/plan/:planId", showPlan);

/**
 * Method PATCH
 * URL /api/plan/:panId
 * To update the plan record
 */
router.patch("/plan/:planId", updatePlan);


module.exports = router;