import Image from "next/image";
import React, { useState } from "react";
import Alert from './Alert'

function UploadForm() {
  const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState(false)

  function onFileSelect(file) {
    console.log(file)
    // setFile(file)

    if(file&&file.size>4000000){
        setErrorMessage(true)
        return
    }
    setErrorMessage(false)
    setFile(file)
  }

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
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full  group text-center">
                  <div className="h-full w-full text-center flex flex-col justify-center items-center">
                    <div className="flex flex-auto  w-2/5 mx-auto ">
                      <Image
                        className=""
                        src="/uploadImage.avif"
                        alt="image"
                        width={300}
                        height={300}
                      />
                    </div>
                    <p className="pointer-none text-gray-500 ">
                      <span className="text-sm">Drag and drop</span> files here{" "}
                      <br /> or{" "}
                      <span className="text-blue-600 hover:underline">
                        select a file
                      </span>{" "}
                      from your computer
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(event) => onFileSelect(event.target.files[0])}
                  />
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              {/* //TODO change this formats */}
              <span>File type: doc,pdf,types of images MAX size 4MB</span>
            </p>
            {errorMessage && <Alert message={'The size of the selected file is too large(Max 4MB)'}/>}
            <div>
              <button
                disabled={!file}
                className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300 disabled:bg-gray-400"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadForm;