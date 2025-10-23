import React, { useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export default function ImageUpload({ onDetected }) {
  const fileRef = useRef();

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
      const model = await mobilenet.load();
      const predictions = await model.classify(img, 5);
      const detected = predictions.map((p) =>
        p.className.split(",")[0].toLowerCase()
      );
      onDetected(detected);
    };
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
      />
    </div>
  );
}
