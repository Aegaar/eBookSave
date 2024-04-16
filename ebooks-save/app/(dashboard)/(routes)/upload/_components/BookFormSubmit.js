"use client";

import { useFormStatus } from "react-dom";

function BookFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300 disabled:bg-gray-400">
      {pending ? "Submitting..." : "Save eBook"}
    </button>
  );
}

export default BookFormSubmit