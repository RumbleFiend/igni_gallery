import React from "react";
import UploadForm from "../components/uploadForm";
import "../assets/styles/gallery.css";
import ImageGrid from "../components/imageGrid";

export default function Gallery() {
  return (
    <div>
      <div className="main">
        <UploadForm />
      </div>
      <ImageGrid />
    </div>
  );
}
