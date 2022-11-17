const express = require("express");
const router = express.Router();
const {
  getData,
  addElement,
  deleteElement,
  editElement,
  sendMail,
} = require("../controllers/data");

router.route("/getdata").get(getData);

router.route("/addelement").post(addElement);

router.route("/deleteelement/:id").post(deleteElement);

router.route("/editelement/:id").post(editElement);

router.route("/sendemail").post(sendMail);

module.exports = router;
