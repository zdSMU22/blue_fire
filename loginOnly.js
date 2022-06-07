import React, {useState} from "./app/node_modules/react";
import axios from "./app/node_modules/axios";
import "./static/css/"

function app() {

    const [email, setemail] = useState('');
    const [passwd, setpasswd] = useState('');

    const [status, setstatus] = useState('');

    const login = () => {
        axios.post('http://localhost:3001/login',{
            email: email,
            passwd: passwd,
        }).then((response) => {
            if(response.data.message){
                setstatus(response.data.message)
            }else {
                //change this to if the username and password combination is reconnized then it goes to the main page
                setstatus(response.data[0].username);
            }
        });
    };

    return(
        <div>
        <div class="login col-sm-3">
        <h1>Welcome Back Bleu Fire Family!</h1>
        <p>Mission Statement</p>
            <input type="text" onChange={(e)=>{setemail(e.target.value);
            }} placeholder="enter your email address" required/>
 
            <input type="password" onChange={(e)=>{setpasswd(e.target.value);
            }} placeholder="enter your password" required/>
   
            <label for="password"></label>
   
            <button onClick={register}>Login</button>
            <h3>Already have an account? <a href="./loginOnly.html">Login in now!</a></h3>
        </div>

        <h2 style="color:red">{status}</h2>
    </div>

    );
};