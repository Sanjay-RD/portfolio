import React from "react"
import "./App.css"
import About from "./components/about/About"
import Experience from "./components/about/Experience"
import Contact from "./components/contact/Contact"
import Featured from "./components/featured/Featured"
import Header from "./components/header-footer/Header"
import Work from "./components/work/Work"


import {Element} from 'react-scroll'
import Blog from "./components/blog/Blog"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

      <Element name="home">
        <Header />
        <Featured />
      </Element>

      <Element name="about">
        <About />
        <Experience />
      </Element>

      <Element name="works">
        <Work />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Switch>
        <Route path="/blog" component={Blog} />
      </Switch>
      </div>
    </Router>
    
  )
}

export default App
