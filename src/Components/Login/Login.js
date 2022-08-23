
import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext}  from '../../store/Context'
function Login() {


  const [ email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)



  const handleLogin =(e) =>{
    e.preventDefault()
    
    // const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (regEx.test(email)) {
    //   setMessages("Email is valid");
    // }
    // if ( email.length === 0) {
    //   setError("true");
    // } else if (!regEx.test(email)) {
    //   setMessages("Email is not valid ");
    // } else {
    //   setMessages("");
    // }
    // if(password.length === 0 && password <6  ){
    //   setPsd("password is not valid")
    // }

  firebase.auth().signInWithEmailAndPassword(email,password).then(()=> {
history.push("/")
  })
    .catch((error)=>{
      alert(error.message)
    })
   


  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
