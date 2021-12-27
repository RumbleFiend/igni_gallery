import { useState, useEffect } from "react";
import "./assets/styles/App.css";
import './assets/styles/gallery.css';
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
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    return () => {};
  });

  return (
    <div className="App">
      <div className="container colored-back">
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
      <Loading loading={loading}></Loading>
      <div className="users-container">
        {users.map((user) => {
          return (
            <div className="users colored-back" key={user.name}>
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

function Loading(props) { /*cercle de chargement*/
  return props.loading ?  <div className="loader"></div> : <div></div>
}


export default App;
