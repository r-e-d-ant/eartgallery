import { useState } from "react";
import Header from "../components/Header";
import { Eart } from "../context/EartContext";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = Eart();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);

  const updateUserInfo = (e) => {
    e.preventDefault();

    setUpdateLoading(true);

    if (firstName.length > 0 && lastName.length > 0) {
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      })
        .then(() => {
          // Profile updated
          setUpdateLoading(false);
        })
        .catch((error) => {
          // Catch Error
          console.log(error.message);

          setErrorMsgs((oldErrorMsg) => [...oldErrorMsg, error.message]);
        });
    }
  };

  return (
    <main className="main">
      <nav className="no-hero-header">
        <Header />
      </nav>
      <section className="profile-section">
        <h1>Profile</h1>
        <div className="user-info">
          <h2 className="display-name">{user.displayName}</h2>
          <h3 className="username">{user.email}</h3>
          <h4 className="user-email">
            {user.emailVerified ? "Email Verified" : "Email not verified"}
          </h4>
          <h5>{user.metadata.creationTime}</h5>
        </div>

        <div className="update-user-form-container">
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
          <form onSubmit={updateUserInfo}>
            <div className="form-control">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                id="fname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                id="fname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={updateLoading}
              className="btn signup-btn"
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Profile;
