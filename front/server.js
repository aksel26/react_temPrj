const express = require("express")
const path = require("path")
const app = express()

const http = require("http").createServer(app)
http.listen(8080, function () {
  console.log("listening on 8080")
})
app.use(express.static(path.join(__dirname, "../front/build")))
app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "../front/build/index.html"))
})

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "build/index.html "))
})

// oracleDB연결
const oracledb = require("oracledb")
const dbConfig = require("./dbConfig")

try {
  oracledb.initOracleClient({
    libDir: "/Users/hxmkim/Downloads/instantclient_19_8",
  })
} catch (err) {
  console.error("Whoops!")
  console.error(err)
  process.exit(1)
}
var bodyParser = require("body-parser")

oracledb.autoCommit = true

oracledb.getConnection(
  {
    user: dbConfig.user,
    password: dbConfig.password,
    connectionString: dbConfig.connecting,
  },
  function (err, conn) {
    if (err) {
      console.log("실패", err.message)
      return
    }

    console.log("성공")
    conn.execute("select * from userinfo", function (err, result) {
      if (err) {
        console.log(err.message)
        return
      }

      console.log("result: ", result)
      console.log("result: ", result)
    })
  }
)
