const { Storage } = require('@google-cloud/storage');

const path = require('path');
const serviceKey = "./config/keys.json";

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'rare-mechanic-407521',
});

module.exports = storage;