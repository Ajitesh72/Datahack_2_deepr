// import 'App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login";
import Map from "./pages/map";

function App() {

  return (
    <Router>
       <Toaster/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Map" element={<Map/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/*" element={<h1>404. Page not found</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
