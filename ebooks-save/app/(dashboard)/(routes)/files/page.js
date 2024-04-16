import { UserButton } from "@clerk/nextjs";
import {getBooks} from '../../../lib/books'
import BooksGrid from './_components/BooksGrid'
import { Suspense } from "react";

function Books() {
  const books =  getBooks();

  return <BooksGrid books={books} />;
}


function Files() {
  return (
    <div>
      Files

      <Suspense
          fallback={<p>Fetching meals...</p>}
        >
          <Books />
        </Suspense>
      {/* <UserButton /> */}
    </div>
  );
}

export default Files;
