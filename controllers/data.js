const Element = require("../models/Element");
const sendEmail = require("../utils/sendEmail");

exports.getData = async (req, res, next) => {
  try {
    const data = await Element.find();
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Can't find the item" });
  }
};

exports.addElement = async (req, res, next) => {
  try {
    const element = req.body;
    const data = new Element(element);
    const newData = await data.save();
    res.json(newData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteElement = async (req, res, next) => {
  Element.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.status(200).json({ success: true, message: "Deleted the item" });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Can't delete the item" });
    }
  });
};

exports.editElement = async (req, res, next) => {
  const element = req.body;
  Element.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (!err) {
      res.status(200).json({ success: true, message: "Edited the item" });
    } else {
      res.status(500).json({ success: false, message: "Can't edit the item" });
    }
  });
};

exports.sendMail = async (req, res, next) => {
  const data = req.body;
  var message = "";

  for (var i = 0; i < data.length; i++) {
    message =
      message +
      `
    Username: ${data[i].username}
    Phone: ${data[i].phone}
    Email: ${data[i].email}
    Hobbies: ${data[i].hobbies}
    `;
  }

  console.log(message);
  try {
    await sendEmail({
      to: process.env.EMAIL_TO,
      subject: "Information of the people",
      text: message,
    });
    res.status(200).json({ success: true, data: "Email Sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Can't send the email" });
  }
};
