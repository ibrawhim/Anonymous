import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import Message from "./components/Message";
import View from "./components/View";
import Navbar from "./components/Navbar";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Error from "./components/Error";

import svg from "../src/images/rose.svg";

function App() {
  const mybg = {
    backgroundImage: `url(${svg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };

  return (
    <div style={mybg} className="min-h-screen">
      <Navbar />

      <div className="mt-16">
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/message/:username" element={<Message />} />
          <Route path="/view" element={<View />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;