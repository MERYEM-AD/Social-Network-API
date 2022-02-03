const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../../controllers/user-controller");

// get route => /api/users || post routes => /api/users
router.route("/").get(getAllUsers).post(createUser)

// get one user by id route  => /api/users/:id 
router.route("/:id").get(getUserById)

module.exports = router;