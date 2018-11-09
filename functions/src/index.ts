import * as functions from "firebase-functions";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as twilio from "twilio";

const app = express();

const accountSid = functions.config().api.twilio.sid;
const authToken = functions.config().api.twilio.token;

const twilioClient = twilio(accountSid, authToken);

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.post("/api/v1/signup", (req, res) => {
  console.log("req", req);

  const { body } = req;

  let optionsText: string = "";

  if (body.checkedWebsite) {
    optionsText += "Web. ";
  }
  if (body.checkedMobileApp) {
    optionsText += "Mobile. ";
  }
  if (body.checkedBackend) {
    optionsText += "Backend. ";
  }

  if (!optionsText) {
    optionsText = "No options selected.";
  }

  const message = `${body.firstName} ${body.lastName}: ${body.email}\n${
    body.description
  }\n${optionsText.trim()}`;

  console.log("sending message", message);

  twilioClient.messages
    .create({
      body: message,
      from: "+18648001894",
      to: functions.config().api.twilio.destination
    })
    .then(messageResponse => {
      console.log("sid", messageResponse.sid);
      res.send({ response: "ok" });
    })
    .catch(e => res.status(500).send({ response: "500" }));
});

app.use((error, req, res, next) => {
  res.send(error.message);
});

exports.api = functions.https.onRequest(app);
