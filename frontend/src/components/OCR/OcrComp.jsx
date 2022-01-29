import React, { useState } from "react";
import FileUpload from "./file-upload/file-upload";
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
    <div >
        <div class="flex justify-center">
            <h1 class="text-5xl font-medium leading-tight mt-0 mb-2 text-blue-600">OCR on SAD</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="OCR"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
        <button
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
      
      <div class="flex justify-center">
        <div class="mb-3 w-96">
          <label
            for="formFileMultiple"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Multiple files input example
          </label>
          <input
            class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
      </div>
    </div>
  );
};

export default OcrComp;
