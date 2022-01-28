import React, { useState } from "react";
import FileUpload from "./file-upload/file-upload"
const OcrComp = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };
  return (
      <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default OcrComp;
