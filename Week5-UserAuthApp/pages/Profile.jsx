import { useAuth } from "../contexts/UserAuthContext";

const Profile = () => {
  const { isLoggedIn, toggleAuth } = useAuth();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Status: {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}</p>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Profile;
