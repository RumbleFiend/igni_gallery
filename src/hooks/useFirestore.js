import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";

const useFirestore = (c) => {
  const [docs, setDocs] = useState([]);
  const collectionRef = collection(db, c);

  useEffect(() => {
    const q = query(collectionRef, orderBy("createdAt","desc"))
    const unsub = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({...doc.data(),id: doc.id});
      });
      setDocs(documents);
    });
    return () => unsub();
  }, [c]);

  return { docs };
};

export default useFirestore;
