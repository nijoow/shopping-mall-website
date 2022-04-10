import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { fileUploadProps } from "../UploadProductPage/UploadProductPage";
function FileUpload({ setThumnailFunc }: { setThumnailFunc: fileUploadProps }) {
  const [previewUrl, setPreviewUrl] = useState("");
  const dropHandler = (files: Array<Blob>) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
      setThumnailFunc(files[0]);
    };
    reader.readAsDataURL(files[0]);
  };
  const deleteHandler = () => {
    setPreviewUrl("");
  };
  return (
    <div className="flex items-center justify-center ">
      {previewUrl ? (
        <div className="flex relative items-center justify-center w-64 h-64 ">
          <div
            className="absolute top-0 right-0 flex items-center justify-center rounded-full bg-red-600 h-7 w-7"
            onClick={() => deleteHandler()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 cursor-pointer fill-white "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <img className="min-w-fit w-64 h-64" src={previewUrl} />
          {/* {images.map((image, index) => (
          <div key={index}>
            <div
              className="absolute top-0 right-0 flex items-center justify-center rounded-full bg-red-600 h-7 w-7"
              onClick={() => deleteHandler(image)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 cursor-pointer fill-white "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <img
              className="min-w-fit w-48 h-48"
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))} */}
        </div>
      ) : (
        <Dropzone onDrop={dropHandler}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div
                {...getRootProps()}
                className="flex items-center justify-center w-64 h-64 bg-gray-400"
              >
                <input {...getInputProps()} />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 fill-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </section>
          )}
        </Dropzone>
      )}
    </div>
  );
}

export default FileUpload;
