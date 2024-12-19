

import './App.css'
import Expreince from './Components/Expreince/Expreince'
import Intro from './Components/Intro/Intro'
import NavBar from './Components/NavBar/NavBar'
import Project from './Components/Projects/Project'

function App() {
 
  return (
       <div className="App">
        <NavBar/>
        <Intro/>
        <Project/>
        <Expreince/>
       </div>
  )
}

export default App
