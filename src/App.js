
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Hero from "./components/Hero";
import Home from "./routes/Home";
import CollectionsPage from "./routes/CollectionsPage";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="*" element={<NotFound />} />

          {/* External links */}
          <Route path='/developer-portfolio' component={() => { 
            window.location.href = 'https://thierrymugisha.netlify.app/'; 
            return null;
          }}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
