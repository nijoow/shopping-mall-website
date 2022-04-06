import React from "react";
import Dropzone from "react-dropzone";

function FileUpload() {
  return (
    <div className="flex justify-between">
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              {...getRootProps()}
              className="flex items-center justify-center w-48 h-48 bg-gray-400"
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
    </div>
  );
}

export default FileUpload;
