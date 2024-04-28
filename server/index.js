const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    port: 3306,
    host: "host.docker.internal",
    password: "",
    database: "register",
});

app.post("/create", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const dstate = req.body.dstate;
    const date = req.body.date;

    db.query(
        "INSERT INTO register (email, password, name, state, date) VALUES (?, ?, ?, ?, ?)",
        [email, password,name, dstate, date],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        }
    );
});

app.get("/register", (req, res) => {
    db.query("SELECT * FROM register", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    
    db.query(
        "DELETE FROM register WHERE id = ?", id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        }
    );
});

app.listen(3005, () =>{
    console.log("server is running on port 3005");
});