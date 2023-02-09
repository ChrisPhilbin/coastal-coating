const functions = require("firebase-functions");
const cors = require("cors");
const app = require("express")();
const admin = require("firebase-admin");
admin.initializeApp();

app.use(cors());

const { sendAppointmentDetails } = require("./api/mail");
const { submitComment } = require("./api/comment");
const { sendKioskResponse } = require("./api/kiosk-mail");

app.post("/book-appointment", sendAppointmentDetails);
app.post("/comment/new", submitComment);
app.post("/kiosk", sendKioskResponse);

exports.api = functions.https.onRequest(app);

const testRequest = {
  body: {
    appointmentDetails: {
      firstName: "Test",
      lastName: "Test",
      phone: "281-330-8004",
      email: "test@test.com",
      carYear: new Date().getFullYear().toString(),
      carMake: "Chevy",
      carModel: "Corvette",
      carMilage: "1500",
      servicesDesired: ["Ceramic Coating"],
      otherComments: "Daily automated test of the consultation form.",
      bestTimesToConnect: ["Between 9am and 12pm"],
      campaignSource: "unknown",
    },
  },
};

const testResponse = {};

exports.scheduledMailerTest = functions.pubsub
  .schedule("30 07 1 * *")
  .timeZone("America/New_York")
  .onRun(async (context) => {
    const result = await sendAppointmentDetails(testRequest, testResponse);
    console.log("Ran scheduled task!");
    console.log(result);
    return null;
  });
