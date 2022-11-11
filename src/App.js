
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sitecardpage from "./components/Site Card/Sitecardpage";

import User from "./components/User form/User";

import Home from "./pages/Home";
import Search from "./pages/Search";

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

  return <Search />
}

export default App;
