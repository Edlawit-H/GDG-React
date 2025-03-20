import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default UserProfile;
