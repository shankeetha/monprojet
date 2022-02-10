import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get(
        " https://lereacteur-vinted-api.herokuapp.com/offers"
      );
    };
  }, []);

  return (
    <div>
      <h1>hello</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Offer/id" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
