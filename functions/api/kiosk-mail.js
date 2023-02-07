const nodemailer = require("nodemailer");
const { mailerConfig } = require("../config/index");
const validator = require("email-validator");
const { isCampaignSourceValid } = require("../util/validators");
const smtpTransport = require("nodemailer-smtp-transport");

exports.sendKioskResponse = async (request, response) => {
  const { firstName, lastName, phone, email, discountEarned, campaignSource } = request.body.appointmentDetails;

  if (!validator.validate(email)) {
    return response.status(400).json({ message: "Must provide valid email address." });
  }

  if (!isCampaignSourceValid(campaignSource)) {
    return response.status(400).json({ message: "Invalid campain source." });
  }

  if (firstName && lastName && phone) {
    const currentDate = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
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
      from: `*** Tradeshow booth visitor *** <${mailerConfig.auth.user}>`,
      to: mailerConfig.to,
      subject: "Coastal Coating: Client contact information from booth visit",
      html: `
            <h2>Client's shared information:</h2>
            <strong>First name:</strong> ${firstName}<br />
            <strong>Last name:</strong> ${lastName}<br />
            <strong>Email address:</strong> ${email}<br />
            <strong>Phone number:</strong> ${phone}<br />
            <strong>Discount earned:</strong> ${discountEarned}<br />
            <hr />
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
