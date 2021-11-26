const nodemailer = require("nodemailer");

exports.sendAppointmentDetails = async (request, response) => {
  const { details } = request.body;

  const transporter = nodemailer.createTransport({
    port: 445,
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: "",
    },
    secure: true,
  });

  const mailData = {
    from: details.email,
    to: "jay@coastalcoating.com",
    subject: "Request for new appointment",
    html: details,
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
