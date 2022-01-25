import React, { useState } from "react";
import { deleteItem } from "../hooks/useFirestore";
import { delImg } from "../hooks/useStorage";


const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      // pour eviter de quitter quand on clique sur l'image
      setSelectedImg(null);
    }
  };
  const handleDelete = async () =>{
    setSelectedImg(null);
    await deleteItem("images",selectedImg.id);
    const delConfirm = await delImg("test",selectedImg.fileName);
    if(delConfirm !== true){
      console.log(delConfirm);
    }
  }
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg.url} alt="enlarged pic"></img>
      <button onClick={handleDelete} className="dropbtn">
          Delete
      </button>
    </div>
  );
};

export default Modal;
