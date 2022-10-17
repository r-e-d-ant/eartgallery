
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./routes/Home";
import CollectionsPage from "./routes/CollectionsPage";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import { ContextProvider } from './context/EartContext';
import Signup from "./routes/Signup";
import Login from "./routes/Login";

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
