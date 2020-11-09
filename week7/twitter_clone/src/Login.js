import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar } from "react-bootstrap";
import { Link , Switch, Route } from "react-router-dom";
import App from "./App"
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
      console.log(email)
    event.preventDefault();
  }

  return (
      <div>
    
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
         <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button> 
        
      </form>
       </div>
       <Link to="/App">Continue </Link>
        <Switch>
            <Route path="/App" render = {()=><App />} />
        </Switch>
    </div>
  );
}

export default Login