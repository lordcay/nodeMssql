var Employees = require('./employees');
var dboperations = require('./dboperations');

dboperations.getEmployees().then((result) => {
  console.log(result);
});
