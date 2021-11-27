const functions = require("firebase-functions");
const cors = require("cors");
const app = require("express")();

app.use(cors());

const { sendAppointmentDetails } = require("./api/mail");

app.post("/book-appointment", sendAppointmentDetails);

exports.api = functions.https.onRequest(app);
