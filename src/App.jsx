

import './App.css'
import Contact from './Components/ContactUs/Contact'
import Expreince from './Components/Expreince/Expreince'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import NavBar from './Components/NavBar/NavBar'
import PortFolio from './Components/Portfolio/PortFolio'
import Project from './Components/Projects/Project'
import { themeContext } from './contaxt'
import { useContext } from 'react'
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
       <div className="App"
       
       style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
       >
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
