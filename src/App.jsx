

import './App.css'
import Intro from './Components/Intro/Intro'
import NavBar from './Components/NavBar/NavBar'
import Project from './Components/Projects/Project'

function App() {
 
  return (
       <div className="App">
        <NavBar/>
        <Intro/>
        <Project/>
       </div>
  )
}

export default App
