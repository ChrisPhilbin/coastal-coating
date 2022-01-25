const nodemailer = require("nodemailer");
const { mailerConfig } = require("../config/index");
const validator = require("email-validator");
const { isCampaignSourceValid } = require("../util/validators");

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
    bestTimesToConnect,
    campaignSource,
  } = request.body.appointmentDetails;

  if (!validator.validate(email)) {
    return response
      .status(400)
      .json({ message: "Must provide valid email address." });
  }

  if (!isCampaignSourceValid(campaignSource)) {
    return response.status(400).json({ message: "Invalid campain source." });
  }

  if (
    firstName &&
    lastName &&
    phone &&
    carYear &&
    carMake &&
    carModel &&
    carMilage
  ) {
    const transporter = nodemailer.createTransport({
      name: mailerConfig.name,
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
      to: mailerConfig.to,
      subject: "Coastal Coating: Request for consultation",
      html: `
            <h2>Customer's shared information:</h2>
            <strong>First name:</strong> ${firstName}<br />
            <strong>Last name:</strong> ${lastName}<br />
            <strong>Email address:</strong> ${email}<br />
            <strong>Phone number:</strong> ${phone}<br />
            <hr />
            <strong>Car year:</strong> ${carYear}<br />
            <strong>Car make:</strong> ${carMake}<br />
            <strong>Car model:</strong> ${carModel}<br />
            <strong>Car milage:</strong> ${carMilage}<br />
            <strong>Services desired:</strong> ${servicesDesired}<br />
            <strong>Best time(s) to contact:</strong> ${bestTimesToConnect}<br />
            <hr />
            <strong>Other comments:</strong> ${otherComments}<br />
            <strong>Campaign source:</strong> ${campaignSource}<br />
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
  }
};
