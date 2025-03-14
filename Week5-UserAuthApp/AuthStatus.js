import { useUserAuth } from "./UserAuthContext";

const AuthStatus = () => {
  const { isLoggedIn } = useUserAuth();

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User! 🎉</p>
      ) : (
        <p>Please log in. 🔒</p>
      )}
    </div>
  );
};

export default AuthStatus;
