const pg = require("pg");
const settings = require("./settings"); // settings.json
let args = process.argv;

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  let string = `
    SELECT * FROM famous_people WHERE
    first_name = $1 OR last_name = $1;`

  client.query(string, [args[2]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows); //output: 1
    client.end();
  });
});