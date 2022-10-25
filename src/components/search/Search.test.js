import { render, screen, fireEvent } from '@testing-library/react';
import Search from './search';

const data = {
    testBookTitle: "the great gatsby"
}



test('Search Input is visible', () => {
    render(<Search />);
    const searchInput = screen.getByTestId("book-search")
    expect(searchInput).toBeInTheDocument();
});

test('Search Input is accepting value', () => {
    render(<Search />);
    const searchInput = screen.getByTestId("book-search")
    fireEvent.change(searchInput, { target: { value: data.testBookTitle } })
    expect(searchInput).toHaveDisplayValue(data.testBookTitle);
});

test('Search Button is visible', () => {
    render(<Search />);
    const searchButton = screen.getByTestId("book-search-button")
    expect(searchButton).toBeInTheDocument();
});

test('Search Button is working', () => {
    render(<Search />);
    const searchInput = screen.getByTestId("book-search")
    fireEvent.change(searchInput, { target: { value: data.testBookTitle } })
    const searchButton = screen.getByTestId("book-search-button")
    expect(searchButton).toBeInTheDocument();
    fireEvent.submit(searchButton)
});