import "./App.css";
import UserLogin from "./components/UserLogin";
import Home from "./components/home";
import AdminLogin from "./components/adminLogin";
import Navbar from "./components/nav";
import Payment from "./components/payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form'
import How from './components/na'
import Test from './components/test'
function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Form" element={<Form />}/>
          <Route path="/Payment" element={<Payment />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/howitswork" element={<How />} />
          
          

        
      </Routes>  
      {/* <Test/> */}
     
    </>
  )
}

export default App;
