const { readDb, writeDb } = require("./db_functions");

// const dataObj = {
//   name: "harry",
//   fav_numbers: [2, 5, 8],
// };

// writeDb(dataObj);  // store dataObj in db.json file

// console.log(readDb()); // displays dataObj

// read the database
const saved_data = readDb();
// access the data and add to it
saved_data["number_of_apples"] = 4;
// store saved_data to database
writeDb(saved_data);
