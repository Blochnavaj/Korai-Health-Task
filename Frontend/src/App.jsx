import { BrowserRouter, Route, Routes } from "react-router-dom"
import UploadPage from "./Pages/UploadPage"
import DashboardPage from "./Pages/DashboardPage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

  
 function App() {
   return (
     <div> 
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<UploadPage/>} />
      <Route path="/dashboard" element={<DashboardPage/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>

     </div>
   )
 }
 
 export default App