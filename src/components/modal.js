import React, { useState } from "react";
import { deleteItem } from "../hooks/useFirestore";


const Modal = ({ selectedImg, selectedId, setSelectedImg, setSelectedId }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      // pour eviter de quitter quand on clique sur l'image
      setSelectedImg(null);
    }
  };
  const handleDelete = async () =>{
    setSelectedImg(null);
    await deleteItem("images",selectedId);
  }
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged pic"></img>
      <button onClick={handleDelete} className="dropbtn">
          Delete
      </button>
    </div>
  );
};

export default Modal;
