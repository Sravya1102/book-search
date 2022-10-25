import React from "react";
import Book from "./Book";
import Loader from "../../components/loader/Loader";
import coverImage from "../../images/book-not-found.jpeg"
import "./booklist.css"

const BookList = (props) => {
    const { books, handleClick, loading, resultTitle } = props
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: singleBook.id.replace("/works/", ""),
            cover_img: singleBook.cover_id
                ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
                : coverImage
        };
    });

    const handleSelect = (e) => {
        console.log(e.target.value)
    }

    if (loading) return <Loader />;

    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <span className="heading">{resultTitle}</span>
                    <select onChange={handleSelect} className="filter">
                        <option value="title-asc">Sort Title A-Z </option>
                        <option value="title-desc">Sort Title Z-A</option>
                        <option value="published-desc">Sort Published Recent</option>
                        <option value="published-desc">Sort Published Old</option>
                    </select>
                </div>
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
