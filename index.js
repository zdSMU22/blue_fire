const express = require ('express');
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/user', authRoute);

//Import Routes
// Do I need this auth route for authorization?
// const authRoute = require('./app/auth/routes/auth');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "H3ctatungsten!&",
    database: "bleufire_db"
},
console.log(`Connected to the inventory_db database.`)
);

app.post('/register', (req, res) => {

    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
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

app.listen(PORT, () => 
console.log('Server is up and running')
);
