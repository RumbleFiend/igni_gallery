import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    if (newName !== "" && newAge !== 0) {
      await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
      window.location.reload();
    } else {
    }
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  };

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
      <div className="container">
        <input
          className="inputs"
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          className="inputs"
          placeholder="Age"
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />
        <button className="buttons inputs" onClick={createUser}>
          Create user
        </button>
      </div>

      <div className="users-container">
        {users.map((user) => {
          return (
            <div className="users" key={user.name}>
              <div>
                <h3>Name : {user.name}</h3>
              </div>
              <div>
                <h3>Age : {user.age}</h3>
              </div>
              <button
              className="buttons"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                <span>Delete user</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
