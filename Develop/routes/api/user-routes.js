const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// get route => /api/users || post routes => /api/users
router.route("/").get(getAllUsers).post(createUser)

// get one user by id route  => /api/users/:id  || update user by id route =>api/users/:id || delete user by id route =>api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser)

// Add and delete a friend routes => /api/users/:userId/friends/:friendId`
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;