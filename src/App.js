import React from 'react'
import "./App.css"
import Header from "./component/header/Header"
import Home from "./component/home/Home"
import About from './component/about/About'
import Skills from './component/skills/Skills'
import Education from './component/education/Education'
import Work from './component/work/Work'
import Contact from './component/contact/Contact'
import Footer from "./component/footer/Footer"
import ScrollUp from './component/scrollup/ScrollUp'

const App = () => {
    return (
     <>
     <Header/>
        <main className="main"> 
          <Home/>
          <About/>
          <Skills/>
          <Education/>
          <Work/>
          <Contact/>
        </main>
      <Footer/>
      <ScrollUp/>
     </>
        
    )
  }

export default App;
