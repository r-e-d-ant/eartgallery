import { Eart } from "../../src/context/EartContext";
import Header from "../components/Header";

const EmailConfirmation = () => {
  const { verifyEmail, user } = Eart();

  const resend = () => {
    verifyEmail(user);
  };
  return (
    <div>
      <nav className="no-hero-header">
        <Header />
      </nav>

      <div className="container">
        <h2>
          A verification email have been sent on your email account check also in spam folder or{" "}
          <span onClick={resend} className="link">
            Resend
          </span>
        </h2>
      </div>
    </div>
  );
};

export default EmailConfirmation;
