const slugify = require("slugify");
const sql = require("better-sqlite3");
const { S3 } = require("@aws-sdk/client-s3");

const s3 = new S3({
  region: "eu-north-1",
});

const db = sql("books.db");

export function getBooks() {
  // throw new Error("loading meals failed");
  return db.prepare("SELECT * FROM books").all();
}

export function getBook(slug){
  return db.prepare("SELECT * FROM books WHERE slug= ?").get(slug);
}

//TODO repair downloading files form aws

export function getBookFile(file){
    const downloadUrl = s3.getSignedUrl('getObject', {
      Bucket: 'ebook-save',
      Key: file,
    });

    return downloadUrl
}

export async function saveBookToDB(book) {
  book.slug = slugify(book.title, { lower: true });
  const extension = book.file.name.split(".").pop();
  const fileName = `${book.slug}.${extension}`;
  book.creator_email = 'lorem ipsum'

  const bufferedFile = await book.file.arrayBuffer();

  s3.putObject({
    Bucket: "ebook-save",
    Key: fileName,
    Body: Buffer.from(bufferedFile),
    ContentType: book.file.type,
  });

  book.file = fileName

  db.prepare(
    `
    INSERT INTO books (title, author, creator_email, file, slug) VALUES (
      @title,
      @author,
      @creator_email,
      @file,
      @slug
    )
`
  ).run(book);
};
