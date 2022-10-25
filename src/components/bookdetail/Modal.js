import React, { useEffect, useState } from "react";
import "./book.css";
import coverImg from "../../images/book-not-found.jpeg"

const URL = "https://openlibrary.org/works/";

const messages = {
    notFound: "Not found"
}

const BookDetail = (props) => {
    const { open, setOpen, currentBook } = props;
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState({})

    const fetchBookDetail = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${currentBook.id}.json`);
            const data = await response.json();

            if (data) {
                const {
                    description,
                    title,
                    covers,
                    subject_places,
                    subject_times,
                    subjects
                } = data;
                const newBook = {
                    description: description ? description.value : messages.notFound,
                    title: title,
                    cover_img: covers
                        ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
                        : coverImg,
                    subject_places: subject_places
                        ? subject_places.join(", ")
                        : messages.notFound,
                    subject_times: subject_times
                        ? subject_times.join(", ")
                        : messages.notFound,
                    subjects: subjects ? subjects.join(", ") : messages.notFound
                };
                setBook(newBook);
            } else {
                setBook(null);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (currentBook && currentBook.id) {
            fetchBookDetail(currentBook.id)
        }
    }, [currentBook])

    return (
        <div id="myModal" className="modal" style={{ display: open ? "block" : "none" }}>
            {loading && <div>Loading...</div>}
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => { setOpen(false) }}>&times;</span>
                    <h2>Book Detail</h2>
                </div>
                <div className="modal-body" style={{display: "flex"}}>
                    <div>
                        <div style={{ width: "30%", marginRight: "20px" }}>
                            <img src={book?.cover_img} alt="cover img" />
                        </div>
                    </div>
                    <div style={{ width: "70%" }}>
                        <div>
                            <div className="desc-section">
                                <span className="book-title">{book?.title}</span>
                            </div>
                            <div className="desc-section">
                                <span className="key-text">Description: </span>
                                <span>{book?.description}</span>
                            </div>
                            <div className="desc-section">
                                <span className="key-text">Subject Places: </span>
                                <span>{book?.subject_places}</span>
                            </div>
                            <div className="desc-section">
                                <span className="key-text">Subject Times: </span>
                                <span>{book?.subject_times}</span>
                            </div>
                            <div className="desc-section">
                                <span className="key-text">Subjects: </span>
                                <span>{book?.subjects}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;