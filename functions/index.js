const functions = require("firebase-functions");
const cors = require("cors");
const app = require("express")();

app.use(cors());

const { sendAppointmentDetails } = require("./api/mail");
const { submitComment } = require("./api/comment");

app.post("/book-appointment", sendAppointmentDetails);
app.post("/comment/new", submitComment);

exports.api = functions.https.onRequest(app);
