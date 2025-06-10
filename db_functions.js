const fs = require("fs");

// readDb & writeDb allow us to persist the data
// readDb - read data then convert to object; writeDb - convert to JSON then write it
function readDb(dbName = "db.json") {
  // readDb on load of application reads the database
  const data = fs.readFileSync(dbName, "utf-8"); // allows us to read files on our local system

  // parse the JSON (from JSON to object and return it)
  const converted_data = JSON.parse(data); // parse() - converts from JSON to object
  return converted_data;
}

// writeDb - when we make changes we need to write those changes in our database
// obj - new data we want to save
function writeDb(obj, dbName = "db.json") {
  // check that user has passed in an object
  if (!obj) {
    return;
  }

  try {
    // conver object to JSON format
    converted_data = JSON.stringify(obj);
    fs.writeFileSync(dbName, converted_data);
    console.log("Saved successfully");
    // save JSON to our JSON database
  } catch (err) {
    console.log("failed to save data\n", err.message);
  }
}

// helps in importing these modules in index.js
module.exports = {
  readDb,
  writeDb,
};
