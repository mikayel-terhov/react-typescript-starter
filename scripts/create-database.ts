import mysql from 'mysql';
const knexfile = require('../../knexfile');

const config = knexfile.connection;

const conn = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
});

console.log('connecting to mysql.');

conn.connect((ex, result) => {
  if (ex) {
    throw ex;
  }

  console.log('connected.');

  conn.query(
    `CREATE DATABASE \`${config.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
    (ex, result) => {
      if (ex) {
        throw ex;
      }

      console.log(`query ok, database '${config.database}' created.`);

      conn.end();
    },
  );
});

// // create database
// execSync(
//   `mysql -h ${config.host} -u ${config.user} -p ${config.password} -e "CREATE DATABASE ${config.database}"`,
//   {
//     stdio: 'inherit',
//   },
// );
