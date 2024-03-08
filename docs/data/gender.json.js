import mysql from "mysql2";

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  user: "root",
  host: "172.18.0.1",
  password: "password1",
  database: "wca",
});

const query = `
WITH ResultDateGenders AS (
  SELECT 
    R.personId, 
    YEAR(Competitions.start_date) AS year, 
    P.gender
  FROM Results R
  JOIN Competitions ON R.competitionId = Competitions.id
  JOIN Persons P ON R.personId = P.wca_id
)
SELECT 
  year,
  COUNT(DISTINCT CASE WHEN gender = 'm' THEN personId END) AS male,
  COUNT(DISTINCT CASE WHEN gender = 'f' THEN personId END) AS female,
  COUNT(DISTINCT CASE WHEN gender = 'o' THEN personId END) AS other
FROM ResultDateGenders
GROUP BY year
ORDER BY year;
`;

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL server: ", err);
    process.exit(1);
  }

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
