const router = require("express").Router();
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
  } = require("../../controllers/thought-controller");
  
  // get and post routes => /api/thoughts

router.route("/").get(getAllThoughts).post(createThought);

  // get one though by id route => at /api/thoughts/:id

router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);
  

  
  module.exports = router;