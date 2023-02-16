// const sql = require('mssql');

// const connectDB = async () => {
//   const sqlConfig = {
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     server: process.env.SERVER,
//     database: process.env.DATABASE,
//   };
//   sql.connect(sqlConfig, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Database Connected Successfully');
//     }
//   });
// };

// module.exports = connectDB;

const config = {
  user: 'caly',
  password: 'root',
  server: `localhost`,
  database: 'PFFA',
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: '4AM529E',
  },
  port: 1433,
};

module.exports = config;
