const oracledb = require("oracledb")
module.exports = {
  user: process.env.NODEORACLE_USER || "test",
  password: process.env.NODEORACLE_PASSWORD || "1234",
  connecting: process.env.NODE_ORACLEDB_CONNECTIONSTIRING || "localhost/xe",
}
