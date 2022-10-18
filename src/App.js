
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./routes/Home";
import CollectionsPage from "./routes/CollectionsPage";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import { ContextProvider } from './context/EartContext';
import Signup from "./routes/Signup";
import EmailConfirmation from "./routes/EmailConfirmation";
import Login from "./routes/Login";
import ResetPassword from "./routes/ResetPassword";
import EmailResetInfo from "./routes/EmailResetInfo";

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-email" element={<EmailConfirmation />} />
            <Route path="/email-reset-info" element={<EmailResetInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
