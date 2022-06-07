import React, {useState} from "./app/node_modules/react";
import axios from "./app/node_modules/axios";
import "./static/css/"
import { use } from "./app/auth/routes/auth";

function app() {

    const [LastNameReg, setLastNameReg] = useState('');
    const [FirstNameReg, setFirstNameReg] = useState('');
    const [emailReg, setemailReg] = useState('');
    const [passwdReg, setPasswdReg] = useState('');

    // A person who need to simply login
    // const [email, setemail] = useState('');
    // const [passwd, setpasswd] = useState('');

    const [status, setstats] = useState('');

    const register = () => {
        axios.post('http://localhost:3001/register',{
            lastname: LastNameReg,
            firstname: FirstNameReg,
            email: emailReg,
            passwd: passwdReg,
        }).then((response) => {
            //Set this up to when you register then it goes to the home page
            console.log(response);
        })
    }

    return(
        <div>
<div class="registration col-sm-3">
        <h1>Join the Bleu Fire Family!</h1>
        <p>Mission Statement</p>
            <input class="form" id="input1" type="text" onChange={(e)=>{setLastNameReg(e.target.value);
            }} placeholder="enter your first name" required/>
   
            <label for="firstname"></label>
    
            <input class="form" id="input2" type="text" onChange={(e)=>{setFirstNameReg(e.target.value);
            }} placeholder="enter your last name" required/> 
    
            <label for="lastname"></label>
  
            <input class="form" id="input3" type="email" onChange={(e)=>{setemailReg(e.target.value);
            }} placeholder="enter your email address" required/>
  
            <label for="email"></label>

            <input class="form" id="input4" type="text" onChange={(e)=>{setPasswdReg(e.target.value);
            }} placeholder="enter your password" required/>
   
            <label for="password"></label>
    
           <button onClick={register}>Sign Me Up!</button>
        <h3>Already have an account? <a href="loginOnly.js">Login in now!</a></h3>
        </div>
            <h1>{status}</h1>
    </div>
    );
};

