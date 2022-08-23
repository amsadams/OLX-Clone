import React, { useContext, useEffect } from "react";   
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from "./store/Context";
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Post from "./store/PostContext";
import View from "./Pages/ViewPost";

function App() {

  const {setUser}= useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
 

  return (
    <Post>
    <Router>
   
      <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/signup">
        <Signup />
        </Route>

        
        <Route exact path="/login">
        <Login />
        </Route>

          
        <Route exact path="/create">
        <Create />
        </Route>

        <Route exact path="/view">
        <View />
        </Route>

    </Router>
    </Post>
  );
}

export default App;
