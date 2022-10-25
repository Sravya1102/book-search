import React, { useState, useEffect } from "react"
import Nav from "./components/nav/Nav"
import BookList from "./components/bookList/BookList";
import BookDetail from "./components/bookdetail/Modal";

const URL = "https://openlibrary.org/search.json?title=";

const App = () => {


  const [searchTerm, setSearchTerm] = useState("the great gatsby");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultTitle, setResultTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchTerm.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      return false
    }
    fetchBooks();
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClick = (currentBook) => {
    setCurrentBook(currentBook)
    setOpen(true)
  }

  useEffect(()=>{
    setSearchTerm("the great gatsby")
    fetchBooks()
  }, [])

  return (
    <>
      <Nav handleChange={handleChange} handleSubmit={handleSubmit} />
      {
        books.length > 0 && (
          <BookList
            books={books}
            loading={loading}
            resultTitle={resultTitle}
            handleClick={handleClick}
          />
        )
      }
      {
        <BookDetail currentBook={currentBook} setOpen={setOpen} open={open}/>
      }
    </>
  );
}

export default App;
