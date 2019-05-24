const express = require("express")
const ctrl = require("./controller")
const massive = require("massive")
require("dotenv").config()


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} =process.env

const app = express()


massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance)
    console.log(`DB Running`)
    app.listen(4000, () => {
        console.log(`listening on port 4000`)
    })
})

app.post("/register", ctrl.register)
app.post("/login", ctrl.login)