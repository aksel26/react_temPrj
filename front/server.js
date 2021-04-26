const express = require("express")
const path = require("path")
const app = express()
app.use(express.urlencoded({ extended: true }))

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

var router = express.Router()
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
    })
  }
)

// 회원가입
app.post("/signup", function (req, res) {
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
      console.log(req.body)
      var query =
        "insert into userinfo(email,name,id,password)" +
        "values(:email, :name, :id, :password)"
      var bindData = [
        req.body.email,
        req.body.name,
        req.body.id,
        Number(req.body.password),
      ]
      conn.execute(query, bindData, function (에러, 연결) {
        if (에러) {
          console.log(에러.message)
          return
        }
        console.log("연결: ", 연결.rowsAffected)

        doRelease(conn, 연결.rowsAffected)
      })
    }
  )
  function doRelease(conn, result) {
    conn.close(function (err) {
      if (err) {
        console.log(err.message)
      }
      res.send("" + result)
    })
  }
})

app.post("/addBoard", function (req, res) {
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
      console.log(req.body)
      var query =
        "insert into board(title,contents)" + "values(:title, :contents)"
      var bindData = [
        req.body.title,
        req.body.contents,

        // Number(req.body.password),
      ]
      conn.execute(query, bindData, function (에러, 연결) {
        if (에러) {
          console.log(에러.message)
          return
        }
        console.log("연결: ", 연결.rowsAffected)

        doRelease(conn, 연결.rowsAffected)
      })
    }
  )
  function doRelease(conn, result) {
    conn.close(function (err) {
      if (err) {
        console.log(err.message)
      }
      res.send("" + result)
    })
  }
})
