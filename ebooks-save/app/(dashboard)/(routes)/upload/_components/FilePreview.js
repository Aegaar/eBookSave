"use client";

import Image from "next/image";
import { ALargeSmall, X } from "lucide-react";
import { useState } from "react";
import Alert from "./Alert";

function FilePreview({ label, name }) {
  const [pickedFile, setPickedFile] = useState();
  const [error, setError] = useState(false)

  function selectFileHandler(file) {
    if (!file) {
      setPickedFile(null);
      return;
    }

    if(file && file.size > 4000000){
      setError(true)
      return
    }

    setPickedFile(file)
    setError(null)
  }

  function removeFileHandler() {
    setError(false);
    setPickedFile(null);
  }

  return (
    <>
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
              <span className="text-sm">Drag and drop</span> files here <br />{" "}
              or{" "}
              <span className="text-blue-600 hover:underline">
                select a file
              </span>{" "}
              from your computer
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            name="file"
            accept=".epub, .mobi, .pdf, .docx, .fb2, .az2, .txt"
            onChange={(event) => selectFileHandler(event.target.files[0])}
          />
        </label>
      </div>
      {error && <Alert/>}
      {pickedFile && (
        <div className="flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-blue-200 ">
          <div className="flex item-center p-2">
            <Image src="/file.png" width={50} height={50} alt="eBook" />
            <div className="text-left">
              <h2>{pickedFile.name}</h2>
              <h2 className="text=[12px] text-gray-400">
                 {(pickedFile.size / 1048576).toFixed(2)}MB
              </h2>
            </div>
          </div>
          <X
            className="text-red-500 cursor-pointer"
            onClick={removeFileHandler}
          />
        </div>
      )}
    </>
  );
}

export default FilePreview;
