const router = require("express").Router();

const {
  getAllUsers
} = require("../../controllers/user-controller");

// get routes => /api/users
router.route("/").get(getAllUsers)

module.exports = router;