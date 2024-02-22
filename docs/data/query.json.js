import mysql from "mysql";

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: "localhost",
  password: "password1",
  database: "wca",
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL server: ", err);
    process.exit(1);
  }

  // Make the query
  const wcaId = "2016HOOV01";
  const query = `SELECT * FROM Results WHERE personId = '${wcaId}'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query: ", err);
      process.exit(1);
    }

    // Output the results as JSON to stdout
    console.log(JSON.stringify(results));

    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error("Error closing connection: ", err);
        process.exit(1);
      }
    });
  });
});
