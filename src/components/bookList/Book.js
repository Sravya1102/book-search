import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { book, handleClick } = props;
  return (
    <div className="card" onClick={()=>handleClick(book)}>
      <div>
        <img src={book.cover_img} alt="cover" className="card-img" />
      </div>
      <div>
        <div>
          <span className="book-title">{book.title}</span>
        </div>
        <div className="book-author">
          <span className="key-text">Author: </span>
          <span>{book?.author?.join(", ")}</span>
        </div>

        <div className="edition">
          <span className="key-text">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className="publish-year">
          <span className="key-text">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
