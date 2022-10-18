import Header from "../components/Header";
import { Link } from "react-router-dom";

const EmailResetInfo = () => {
  return (
    <div>
      <nav className="no-hero-header">
        <Header />
      </nav>

      <div className="container">
        <h2>
          A password reset email will be send if there are any email
          corresponding to that! rememeber to check also in yout spam.
          <Link to="/login" className="link">
            Back on Login page
          </Link>
          .
        </h2>
      </div>
    </div>
  );
};

export default EmailResetInfo;
