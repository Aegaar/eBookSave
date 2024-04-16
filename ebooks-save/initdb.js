const sql = require("better-sqlite3");
const db = sql("books.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS books (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       file TEXT NOT NULL,
       author TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();
