const nodemailer = require("nodemailer");

exports.sendAppointmentDetails = async (request, response) => {
  console.log(request, "request passed in...");
  const { details } = request.body;

  const transporter = nodemailer.createTransport({
    port: 0,
    host: "",
    auth: {
      user: "",
      pass: "",
    },
    secure: true,
  });

  const mailData = {
    from: "noreply@test.com",
    to: "chris@chrisphilbin.net",
    subject: "Request for new appointment",
    html: "<h1>test</h1>",
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      response
        .status(400)
        .json({ error: "There was an error when sending the message." });
    }
    response.status(200).json({ msg: "Message sent!", info });
  });
};
