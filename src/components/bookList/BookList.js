import React from "react";
import Book from "./Book";
import Loader from "../../components/loader/Loader";
import coverImage from "../../images/book-not-found.jpeg"
import "./booklist.css"

const BookList = (props) => {
    const { books, handleClick, loading } = props
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: singleBook.id.replace("/works/", ""),
            cover_img: singleBook.cover_id
                ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
                : coverImage
        };
    });


    if (loading) return <Loader />;

    return (
        <section className="booklist">
            <div className="container">
                <div className="booklist-content grid">
                    {booksWithCovers.slice(0, 10).map((item, index) => {
                        return <Book handleClick={handleClick} key={index} book={item} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default BookList;
