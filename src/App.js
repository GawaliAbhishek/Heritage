import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sitecardpage from "./components/Site Card/Sitecardpage";
import Home from "./pages/Home";

function App() {
  return (
    <>
 
 <BrowserRouter>
  
  <Routes>
  <Route exact path="/" element={<Home/>}/>
    <Route exact path="/sites" element={<Sitecardpage/>}/>
  </Routes>

 </BrowserRouter>
</>
  );
}

export default App;
