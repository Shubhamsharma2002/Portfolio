

import './App.css'
import Contact from './Components/ContactUs/Contact'
import Expreince from './Components/Expreince/Expreince'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import NavBar from './Components/NavBar/NavBar'
import PortFolio from './Components/Portfolio/PortFolio'
import Project from './Components/Projects/Project'

function App() {
 
  return (
       <div className="App">
        <NavBar/>
        <Intro/>
        <Project/>
        <Expreince/>
        <PortFolio/>
        <Contact/>
        <Footer/>
       </div>
  )
}

export default App
