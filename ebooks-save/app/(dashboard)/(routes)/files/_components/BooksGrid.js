import BookItem from './BookItem'

function BooksGrid({books}) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
            <BookItem {...book}/>
        </li>
      ))}
    </ul>
  )
}

export default BooksGrid