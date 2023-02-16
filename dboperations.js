var config = require('./dbconfig');
const sql = require('mssql');

async function getEmployees() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query('SELECT * from employees');
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getEmployees: getEmployees,
  //   getOrder: getOrder,
  //   addOrder: addOrder,
};
