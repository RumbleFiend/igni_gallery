import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase/config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    if((newName !== "") && (newAge !==0)){
      await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
      window.location.reload();
    }
    
  };

  const deleteUser = async (id) =>{
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
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        placeholder="Age"
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}>Create user</button>

      <div className="users-container">
        {users.map((user) => {
          return (
            <div className="users" key={user.name}>
              <div>
                <h1>Name : {user.name}</h1> <p className="items"></p>
              </div>
              <div>
                <h1>Age : {user.age}</h1> <p className="items"></p>
              </div>
              <button className="button-82-pushable" onClick={()=>{deleteUser(user.id)}}> 
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Delete user</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
