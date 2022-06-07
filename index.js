const express = require ('express');
const mysql = require("mysql");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/user', authRoute);

//Import Routes
const authRoute = require('./app/auth/routes/auth');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "H3ctatungsten!&",
    database: "useraccount"
});

app.post('/register', (req, res) => {

    const LastName = req.body.LastName;
    const FirstName = req.body.FirstName;
    const email = req.body.email;
    const passwd = req.body.passwd;

    db.query("insert into users (LastName, FirstName, email, passwd) values (?,?,?,?)", 
    [LastName, FirstName, email, passwd],
    (err, result) => {
        console.log(err);
    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const passwd = req.body.passwd;

    db.query("select * from users where email = ? and password = ?)", 
    [email, passwd],
    (err, result) => {
        if (err){
        res.send({err: err})
        };
      
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message:"Wrong email and/or password"});
        }
      }
    );
});

app.listen(3000, () => 
console.log('Server is up and running')
);
