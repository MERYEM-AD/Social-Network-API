const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../../controllers/user-controller");

// get route => /api/users || post routes => /api/users
router.route("/").get(getAllUsers).post(createUser)

module.exports = router;