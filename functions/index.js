const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.bitrixWebHook = functions.https.onRequest((request, response) => {
  functions.logger.info("BITRIX WEBHOOK:", request.body);
  response.status(200).send("OK");
});
