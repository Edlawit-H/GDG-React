import { UserAuthProvider } from "./UserAuthContext";
import AuthStatus from "./AuthStatus";
import AuthButton from "./AuthButton";

function App() {
  return (
    <UserAuthProvider>
      <div className="app-container">
        <h1>User Authentication</h1>
        <AuthStatus />
        <AuthButton />
      </div>
    </UserAuthProvider>
  );
}

export default App;
