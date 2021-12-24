import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    return () => {};
  }, []);

  return (
    <div className="App">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Age" />
      <button>Create user</button>
      <div className="users-container">
        {users.map((user) => {
          return (
            <div className="users" key={user.name}>
              <h1>Name : {user.name}</h1>
              <h1>Age : {user.age}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
