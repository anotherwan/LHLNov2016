'use strict'

// const pg = require("pg");
const settings = require("./settings"); // settings.json
let knex = require('knex')({
  user: "qgvomvnerjsjcz",
  password: "P5463GpPVrWg9UE3IokSoUdz_I",
  database: "ddhnq64o8f9s6k",
  hostname: "ec2-107-20-198-81.compute-1.amazonaws.com",
  port: 5432,
  ssl: true
});
let person = process.argv

knex
  .select('*').from('persons')
  .where('last_name', person)
  .orWhere('first_name', person)
  .then((result) => {
  console.log(results);
})

.catch((err) => {
  console.log("reject");
})
.finally(() => {
  knex.destroy()
})