import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return ""+errorCode+" : "+errorMessage;
      // ..
    });
};

export default useAuth;
