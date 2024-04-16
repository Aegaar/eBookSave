"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function saveBook(prevState, formData) {
  const eBook = {
    title: formData.get("title"),
    author: formData.get("author"),
    file: formData.get("file"),
  };

  if (
    isInvalidText(eBook.title) ||
    isInvalidText(eBook.author) ||
    !eBook.file ||
    eBook.file.size > 4000000
  ) {
    return {
      message: "Invalid input",
    };
  }

//   TODO add better validation and errors

//   if(isInvalidText(eBook.title)) {
//     return {
//         message: "The title of the eBook cannot be empty",
//       };
//   }

  console.log(eBook);
  // await saveBook(eBook);

  revalidatePath("/upload");
  redirect("/files");
}
