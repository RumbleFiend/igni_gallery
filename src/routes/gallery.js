import React, { useState } from "react";
import UploadForm from "../components/uploadForm";
import "../assets/styles/gallery.css";
import ImageGrid from "../components/imageGrid";
import Modal from "../components/modal";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="gallery">
        <UploadForm />
      </div>
      <ImageGrid
        setSelectedImg={setSelectedImg}
        setSelectedId={setSelectedId}
      />
      <div className="modal">
        {selectedImg && (
          <Modal
            selectedImg={selectedImg}
            selectedId={selectedId}
            setSelectedImg={setSelectedImg}
            setSelectedId={setSelectedId}
          />
        )}
      </div>
    </div>
  );
}
