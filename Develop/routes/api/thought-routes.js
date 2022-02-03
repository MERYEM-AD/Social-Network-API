const router = require("express").Router();
const {
    getAllThoughts,
    createThought,
  } = require("../../controllers/thought-controller");
  
  // get and post routes => /api/thoughts

router.route("/").get(getAllThoughts).post(createThought);
  

  
  module.exports = router;