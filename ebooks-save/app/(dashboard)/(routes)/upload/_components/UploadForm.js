"use client";

import FilePreview from "./FilePreview";
import BookFormSubmit from "./BookFormSubmit";
import { useFormState } from "react-dom";
import { saveBook } from "../../../../lib/action";
import Alert from "./Alert";

function UploadForm() {
  const [state, formAction] = useFormState(saveBook, { message: null });

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
          <form className="mt-8 space-y-3" action={formAction}>
            <div className="grid grid-cols-1 space-y-2">
              <label
                className="text-sm font-bold text-gray-500 tracking-wide"
                htmlFor="title"
              >
                Book Title
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                name="title"
                id="title"
                required
              />
              <label
                className="text-sm font-bold text-gray-500 tracking-wide"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                name="author"
                id="author"
                required
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Attach Document
              </label>
            </div>
            <FilePreview />
            <p className="text-sm text-gray-300">
              <span>
                File type: EPUB, MOBI, PDF, FB2, AZ2, TXT DOC types of images
                MAX size 4MB
              </span>
            </p>
            {state && state.message !== null && (
              <Alert message={state.message} />
            )}

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
