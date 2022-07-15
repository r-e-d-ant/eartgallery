
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Hero from "./components/Hero";
import Home from "./routes/Home";
import CollectionsPage from "./routes/CollectionsPage";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [darkBg, setDarkBg] = useState(false);

  return (
    <Router>
      <div className={"App " + (darkBg ? 'dark-bg' : '')}>
        <Hero />
        <Routes>
          <Route path="/" element={<Home setDarkBg={setDarkBg} />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
