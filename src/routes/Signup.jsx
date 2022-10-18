import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Eart } from "../context/EartContext";
import PasswordChecklist from "react-password-checklist";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [errorMsgs, setErrorMsgs] = useState([]);

  const { createUser, verifyEmail, logoutUser } = Eart();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password)
        .then(({ user }) => {
          console.log("hello", user.email);
          setErrorMsgs([]);
          verifyEmail(user);
          navigate("/verify-email");
        })
        .then((user) => {
          logoutUser(user); // logout user after signup so that he can signin again
        });
    } catch (error) {
      switch (error.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          setErrorMsgs((oldErrorMsg) => [
            ...oldErrorMsg,
            "Sorry! Email already in use.",
          ]);
          break;
        default:
          setErrorMsgs((oldErrorMsg) => [...oldErrorMsg, error.message]);
          break;
      }
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
            <div
              className="error-msg-container"
              hidden={errorMsgs.length > 0 ? false : true}
            >
              <ul>
                {errorMsgs.map((errorMsg, index) => (
                  <li key={index}>{errorMsg}</li>
                ))}
              </ul>
            </div>
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
                  onChange={(e) => {
                    setUsername(e.target.value);
                    username.length > 1
                      ? setValidUsername(true)
                      : setValidUsername(false);
                  }}
                  required
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    email.length > 5
                      ? setValidEmail(true)
                      : setValidEmail(false);
                  }}
                  required
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
              <PasswordChecklist
                rules={[
                  "lowercase",
                  "capital",
                  "specialChar",
                  "number",
                  "minLength",
                ]}
                iconSize={14}
                minLength={6}
                invalidColor={"#e56b6f"}
                value={password}
                onChange={(isValid) => {
                  setValidPassword(isValid);
                }}
              />

              <div className="form-control btn-form-control">
                <button
                  type="submit"
                  disabled={!validUsername || !validEmail || !validPassword}
                  className="btn signup-btn"
                >
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
