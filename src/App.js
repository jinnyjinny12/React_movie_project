
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
       <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />} />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      
        {/* <Route path="/movie/:id" element={<Detail />} /> 
        <Route path="/" element={<Home />} /> 
       */}
      </Routes>

    </BrowserRouter>
    );
  
}

export default App;
