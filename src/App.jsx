import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Profile from "./components/profile.jsx"
import Connections from "./components/Connections.jsx"
import BodyFull from "./components/BodyFull.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"

function App() {

  return (
    <>  
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<BodyFull />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Route>
          <Route path="/" element={<Body />}>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/connections" element={<Connections />}/>

          </Route>
        </Routes>
      </BrowserRouter>    
      {/*<Navbar />
      <h1 className="text-3xl font-bold underline">Code Connect</h1>*/}
    </>
  )
}

export default App
