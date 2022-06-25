import "./styles.css";
import { useState } from "react";
import FileUpload from "react-material-file-upload";

export default function App() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="App">
      <h1>Paper.Do Frontend</h1>
      <FileUpload value={files} onChange={setFiles} />
    </div>
  );
}