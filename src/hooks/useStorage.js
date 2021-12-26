import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //pourcentage de l'upload
        setProgress(percentage);
        console.log("Uploaded a blob or file!");
      },
      (err) => {
        setError(err);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const url = downloadURL;  //L'URL du fichier
          setUrl(url);
          console.log("URL set");
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;