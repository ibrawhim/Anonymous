import { Route, Routes } from "react-router-dom"
import Background from "./components/Background"
import SignUp from "./components/SignUp"
import Landing from "./components/Landing"
import Signin from "./components/Signin"
import Profile from "./components/Profile"
import Message from "./components/Message"


function App() {


  return (
    <>
    <div>
      {/* <Background/> */}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path="/message/:username"  element={<Message/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
