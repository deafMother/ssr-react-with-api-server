const userController = require("../controller/userController");
const notesController = require("../controller/notesController");

const express = require("express");
const router = express.Router();

router
  .route("/login")
  .post(userController.loginIn)
  .get(userController.protect, userController.checkLoginStatus);

router.route("/logout").get(userController.logout);
router
  .route("/notes")
  .all(userController.protect)
  .get(notesController.allNotes)
  .post(notesController.addNewNote);

module.exports = router;
