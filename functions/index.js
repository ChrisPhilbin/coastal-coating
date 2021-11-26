const functions = require("firebase-functions");
const app = require("express")();

const { sendAppointmentDetails } = require("./api/mail");

app.post("/book-appointment", sendAppointmentDetails);

exports.api = functions.https.onRequest(app);
