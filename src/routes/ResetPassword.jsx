import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eart } from "../context/EartContext";
import Header from "../components/Header";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMsgs, setErrorMsgs] = useState([]);

  const navigate = useNavigate();

  const { resetUserPassword } = Eart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetUserPassword(email).then(() => {
        navigate("/email-reset-info");
      });
    } catch (error) {
      switch (error.message) {
        case "Firebase: Error (auth/wrong-password).":
          navigate("/email-reset-info");
          break;
        case "Firebase: Error (auth/user-not-found).":
          navigate("/email-reset-info");
          break;
        default:
          setErrorMsgs((oldErrorMsg) => [...oldErrorMsg, error.message]);
          break;
      }
    }
  };

  return (
    <div>
      <nav className="no-hero-header">
        <Header />
      </nav>
      <section className="signup-section">
        <div className="signup-container container">
          <h2 className="page-title">
            Log in to <span className="logo">eArtGallery</span>
          </h2>

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
                <button
                  type="submit"
                  className="btn signup-btn"
                  disabled={email.length > 5 ? false : true}
                >
                  Request password reset
                </button>
              </div>
            </form>

            <Link to="/login" className="switch-login-signup">
              Rememember my password?
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
    </div>
  );
};

export default ResetPassword;
