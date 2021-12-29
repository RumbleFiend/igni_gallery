import React, { useState } from "react";
import ProgressBar from "./progressBar";
import { MdFileUpload } from "react-icons/md";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Svp selectionnez une image (png ou jpeg)");
    }
  };

  return (
    <div className="gallery-form">
      <h1>Votre gallerie d'images</h1>
      <form className="input-form">
        <label htmlFor="file" className="label-file">
          Ajouter une image
          <br />
          <MdFileUpload size="4em" />
        </label>
        <input
          id="file"
          className="input-file"
          type="file"
          onChange={changeHandler}
        />
      </form>
      <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    </div>
  );
};

export default UploadForm;
