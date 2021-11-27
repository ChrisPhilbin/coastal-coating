const nodemailer = require("nodemailer");
const { mailerConfig } = require("../config/index");

exports.sendAppointmentDetails = async (request, response) => {
  console.log(request, "request passed in...");
  const {
    firstName,
    lastName,
    phone,
    email,
    carYear,
    carMake,
    carModel,
    carMilage,
    servicesDesired,
    dateDesired,
  } = request.body.appointmentDetails;

  const transporter = nodemailer.createTransport({
    port: mailerConfig.port,
    host: mailerConfig.host,
    auth: {
      user: mailerConfig.auth.user,
      pass: mailerConfig.auth.pass,
    },
    secure: mailerConfig.secure,
  });

  const mailData = {
    from: email,
    to: "chris@chrisphilbin.net",
    subject: "Request for new appointment",
    html: `
        <h2>Customer's shared information:</h2>
        <strong>First name:</strong> ${firstName}<br />
        <strong>Last name:</strong> ${lastName}<br />
        <strong>Email address:</strong> ${email}<br />
        <strong>Phone number:</strong> ${phone}<br />
        <hr />
        <strong>Car year:</strong> ${carYear}<br />
        <strong>Car make</strong> ${carMake}<br />
        <strong>Car model</strong> ${carModel}<br />
        <strong>Car milage</strong> ${carMilage}<br />
    `,
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
