import { Navigate, Route, Routes } from "react-router-dom"
// import Background from "./components/Background"
import SignUp from "./components/SignUp"
import Landing from "./components/Landing"
import Signin from "./components/Signin"
import Profile from "./components/Profile"
import Message from "./components/Message"
import View from "./components/View"
import Navbar from "./components/Navbar"
import Faqs from "./components/Faqs"
import Footer from "./components/Footer"
import About from "./components/About"
// import Footer from "./components/Footer"
import svg from '../src/images/rose.svg'
import Error from "./components/Error"





function App() {
let mybg = {
  backgroundImage: `url(${svg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: "fixed",
  height: '500vh'
}

  return (
    <>
    <div style={mybg} className="z-0">
      <Navbar/>
      {/* <Background/> */}
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path="/message/:username"  element={<Message/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/faqs"  element={<Faqs/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path='/home' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
