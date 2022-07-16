
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Hero from "./components/Hero";
import Home from "./routes/Home";
import CollectionsPage from "./routes/CollectionsPage";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  // i pass this state here because i want that the background color change when an image is clicked
  // and there will be a modal only on focus!
  const [darkBg, setDarkBg] = useState(false);

  return (
    <Router>
      <div className={"App " + (darkBg ? 'dark-bg' : '')}>
        <Hero />
        <Routes>
          <Route path="/" element={<Home setDarkBg={setDarkBg} />} />
          <Route path="/collections" element={<CollectionsPage setDarkBg={setDarkBg} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
