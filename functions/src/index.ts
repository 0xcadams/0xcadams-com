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

app.post("/", (req, res) => {
  const { body } = req;

  let webAndMobileText;

  if (body.checkedWebsite && !body.checkedMobileApp) {
    webAndMobileText = "Website only.";
  } else if (!body.checkedWebsite && body.checkedMobileApp) {
    webAndMobileText = "Mobile app only.";
  } else if (body.checkedWebsite && body.checkedMobileApp) {
    webAndMobileText = "Both website and mobile app.";
  } else {
    webAndMobileText = "No options selected.";
  }

  const message = `${body.firstName} ${body.lastName}: ${body.email}\n${
    body.description
  }\n${webAndMobileText}`;

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
