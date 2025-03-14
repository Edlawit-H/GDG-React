import { useUserAuth } from "./UserAuthContext";

const AuthButton = () => {
  const { isLoggedIn, login, logout } = useUserAuth();

  return (
    <button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
};

export default AuthButton;
