import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
