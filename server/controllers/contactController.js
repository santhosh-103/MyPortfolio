const Contact = require("../models/Contact");
const transporter = require("../config/mail");

const createContact = async (req, res) => {
  try {
    
    const contact = await Contact.create(req.body);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact",
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
      `,
    });


    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createContact };