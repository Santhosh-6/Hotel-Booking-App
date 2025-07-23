import { Route,Routes } from "react-router-dom";
import BookingPage from './pages/BookingPage'
import HomePage from './pages/HomePage'
import SuccessPage from './pages/SuccessPage'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Service from "./components/Service";

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/booking" element={<BookingPage />} />
       <Route path="/success" element={<SuccessPage />} />
       <Route path="/about" element={<About />} />
       <Route path="/nav" element={<Navbar />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/signIn" element={<Signin />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/service" element={<Service />} />
   </Routes>
    </>
  )
}

export default App
