const router = require("express").Router();
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
  } = require("../../controllers/thought-controller");
  
  // get and post routes => /api/thoughts

router.route("/").get(getAllThoughts).post(createThought);

  // get one though  || Update thought || delete a thougt by id route => at /api/thoughts/:id

router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// post || delete reaction route => /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

  
  module.exports = router;