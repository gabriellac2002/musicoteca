import { Routes, Route, BrowserRouter  } from "react-router-dom";

import Home from "./pages/Home"
import Members from "./pages/Members/members";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/login" element={<Login />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
