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

router.route("/").get((req, res) => {
  return res.status(200).send({ msg: "App started" });
});

module.exports = router;
