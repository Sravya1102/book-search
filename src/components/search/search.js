import React from "react";
import "./search.css";

const messages = {
    placeholder: "Book Title"
};
const Search = (props) => {
    const { handleSubmit, handleChange } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    data-testid="book-search"
                    type="text"
                    placeholder={messages.placeholder}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    data-testid="book-search-button"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;
