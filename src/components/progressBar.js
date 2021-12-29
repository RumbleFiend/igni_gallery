import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file); //envoyer vers le firebase storage
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      className="progress-bar"
      style={{ width: progress + "%", borderColor: "var(--third)" }}
    ></div>
  );
};

export default ProgressBar;
