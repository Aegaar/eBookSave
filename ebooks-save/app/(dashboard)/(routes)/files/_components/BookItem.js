import { getBookFile } from "../../../../lib/books";
import { Suspense } from "react";

// async function BookDownloadUrl({ file }) {
//   const bookUrl = await getBookFile(file);

//   return <p>{bookUrl}</p>;
// }

;

function BookItem({ title, author, file, slug, creator_email }) {

  const fileUrl = "https://ebook-save.s3.eu-north-1.amazonaws.com/ww.txt";
  return (
    <article>
      <header>
        <div>
          <h2>{title}</h2>
          <p>creator {creator_email}</p>
        </div>
      </header>
      <div>
        <p>{author}</p>
        {/* <Suspense fallback={<p>Fetching book url</p>}>
          <BookDownloadUrl file={file} />
        </Suspense> */}
        <a href={fileUrl} download>Download</a>
      </div>
    </article>
  );
}

export default BookItem;
