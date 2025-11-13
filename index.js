import * as functions from "firebase-functions";
import fetch from "node-fetch";
import cors from "cors";

const corsHandler = cors({ origin: true }); // Allow all origins

// New function for uploading image to Apps Script → Sheet
export const uploadToAppsScript = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { stone_name, category, filename, file, mimeType } = req.body;

      // POST to Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxFhjrME1H06oShCKSEwmGFwmQVAXWXlMfDmATM5qTmPoFJKozEQJ2UBu4n5OH-ATBu/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stone_name, category, filename, file, mimeType }),
        }
      );

      const data = await response.json();
      res.status(200).send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({ status: "error", message: err.message });
    }
  });
});
