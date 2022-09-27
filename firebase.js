const admin = require('firebase-admin');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const serviceAccount = require('./firebaseKey.json');
require('dotenv').config();

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.DB_URL
    });
  }

module.exports.admin = admin;
module.exports.db = admin.firestore();
module.exports.FieldValue = FieldValue;
module.exports.auth = admin.auth();
module.exports.rtDb = admin.database();