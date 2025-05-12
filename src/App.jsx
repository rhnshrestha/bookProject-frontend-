import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import LearnUseEffect from "./LearnUseEffect"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />}/>
        <Route path="/contact/" element={<Contact />}/>
        <Route path="/useEffect/" element={<LearnUseEffect/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
