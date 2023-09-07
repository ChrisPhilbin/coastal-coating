const nodemailer = require("nodemailer");
const { mailerConfig } = require("../config/index");
const validator = require("email-validator");
const { isCampaignSourceValid } = require("../util/validators");
const smtpTransport = require("nodemailer-smtp-transport");

exports.sendAppointmentDetails = async (request, response) => {
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
    otherComments,
    campaignSource,
  } = request.body.appointmentDetails;

  if (!validator.validate(email)) {
    return response.status(400).json({ message: "Must provide valid email address." });
  }

  if (!isCampaignSourceValid(campaignSource)) {
    return response.status(400).json({ message: "Invalid campain source." });
  }

  if (firstName && lastName && phone && carYear && carMake && carModel && carMilage) {
    const currentDate = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    const transporter = nodemailer.createTransport(
      smtpTransport({
        name: mailerConfig.name,
        port: mailerConfig.port,
        host: mailerConfig.host,
        secure: mailerConfig.secure,
        // ignoreTLS: true,
        // requireTLS: true,
        tls: {
          rejectUnauthorized: false,
        },
        auth: {
          user: mailerConfig.auth.user,
          pass: mailerConfig.auth.pass,
        },
      })
    );

    const mailData = {
      // from: `${firstName} ${lastName} <${email}>`,
      from: `*** Consultation Request *** <${mailerConfig.auth.user}>`,
      to: email === "test@test.com" ? "chris@chrisphilbin.net" : mailerConfig.to,
      subject: "Coastal Coating: Request for consultation",
      html: `
            <h2>Customer's shared information:</h2>
            <strong>First name:</strong> ${firstName}<br />
            <strong>Last name:</strong> ${lastName}<br />
            <strong>Email address:</strong> <a href="mailto:${email}">${email}</a><br />
            <strong>Phone number:</strong> ${phone}<br />
            <hr />
            <strong>Car year:</strong> ${carYear}<br />
            <strong>Car make:</strong> ${carMake}<br />
            <strong>Car model:</strong> ${carModel}<br />
            <strong>Car milage:</strong> ${carMilage}<br />
            <strong>Services desired:</strong> ${servicesDesired}<br />
            <hr />
            <strong>Other comments:</strong> ${otherComments}<br />
            <strong>Campaign source(s):</strong> ${campaignSource}<br />
            <strong>Server timestamp:</strong> ${currentDate}<br />
        `,
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.log(error, "Error");
        return response.status(400).json({ error: "There was an error when sending the message." });
      }
      console.log("Email sent success");
      return response.status(200).json({ msg: "Message sent!", info });
    });
  } else {
    console.log("Something went wrong.");
    return response.status(400).json({ error: "Missing required form data. Please try again." });
  }
};
