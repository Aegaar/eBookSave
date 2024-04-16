import Image from "next/image";
// import React, { useState } from "react";
import Alert from "./Alert";
import FilePreview from "./FilePreview";
import BookFormSubmit from "./BookFormSubmit";

function UploadForm() {
  // const [file, setFile] = useState();
  // const [errorMessage, setErrorMessage] = useState(false);

  // function onFileSelect(file) {
  //   if (file && file.size > 4000000) {
  //     setErrorMessage(true);
  //     return;
  //   }
  //   setErrorMessage(false);
  //   setFile(file);
  // }

  // function removeFileHandler() {
  //   setErrorMessage(false);
  //   setFile(null);
  // }

  return (
    <>
      <div className="relative  flex items-center justify-center">
        <div className="absolute inset-0 z-0"></div>
        <div className="sm:max-w-lg w-full  bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              eBook Upload!
            </h2>
            <p className="mt-2 text-sm text-gray-400">Store & share eBooks</p>
          </div>
          <form className="mt-8 space-y-3">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Book Title
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
              />
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Author
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Attach Document
              </label>
            </div>
          
            {/* {errorMessage && (
              <Alert
                message={"The size of the selected file is too large(Max 4MB)"}
              />
            )}
            {file && (
              <FilePreview file={file} onRemoveFile={removeFileHandler} />
            )} */}
            <FilePreview />
            <p className="text-sm text-gray-300">
              {/* //TODO change this formats */}
              <span>File type: EPUB, MOBI, PDF, FB2, AZ2, TXT DOC types of images MAX size 4MB</span>
            </p>
            <div>
              <BookFormSubmit />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadForm;
