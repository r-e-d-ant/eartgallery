import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Eart } from "../context/EartContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = Eart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password)
      .then((({user}) => {
        console.log(user);
        console.log("hello");
      }));
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
          <h2 className="page-title">Sign Up</h2>

          <div className="form-container">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="username" className="signup-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="input signup-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
                  Sign Up
                </button>
              </div>
            </form>

            <Link to="/login" className="switch-login-signup">
              Already have an account? Login
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

export default Signup;
