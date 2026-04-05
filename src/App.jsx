import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User Cards (API)</h1>

      <div className="card-container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;