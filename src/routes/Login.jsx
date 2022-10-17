import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Eart } from "../context/EartContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUser } = Eart();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUser(email, password).then(({ user }) => {
        navigate("/home");
        console.log(user);
        console.log("hello");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="main">
      <nav className="no-hero-header">
        <Header />
      </nav>
      <section className="signup-section">
        <div className="signup-container container">
          <h2 className="page-title">
            Log in to <span className="logo">eArtGallery</span>
          </h2>

          <div className="form-container">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="email" className="signup-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input signup-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="signup-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input signup-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-control">
                <button type="submit" className="btn signup-btn">
                  Log In
                </button>
              </div>
            </form>

            <Link to="/signup" className="switch-login-signup">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>

        <div className="hero-container">
          <img
            src="/images/signup-img.jpg"
            className="side-login-up-img"
            alt=""
          />
        </div>
      </section>
    </main>
  );
};

export default Login;
