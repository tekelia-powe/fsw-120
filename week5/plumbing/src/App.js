import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./home"
import About from "./about"
import Services from "./services"
import Footer from "./Footer"
import Header from "./Header"
import Right from "./Right"

import "./App.css"

function App() {
  return (
    <div className="grid-container">
      <Header />
      <navbar className="nav">
      <Link to="/">Home</Link><br></br>
      <Link to="/about">About</Link><br></br>
      <Link to="/services">Services</Link><br></br>
      </navbar>
      <main className="main">
      <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/services" render={() => <Services />} />
      </Switch>
      </main>
      <Right />
      <Footer />

    </div>
  );
}

export default App;
