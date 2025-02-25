import React from "react";
import "../style/FeaturedBooks.css"

const books = [
    {
        title: "Funny Story",
        author: "Emily Henry",
        image: "https://ic.od-cdn.com/resize?type=auto&width=536&quality=80&force=true&height=715&url=%2FImageType-400%2F1523-1%2F%257BA2A9BABA-C565-474A-BDD3-1D02A8E13213%257DIMG400.JPG",
    },
    {
        title: "Atomic Habits",
        author:"James Clear",
        image: "https://ic.od-cdn.com/resize?type=auto&width=536&quality=80&force=true&height=715&url=%2FImageType-400%2F1523-1%2F%257BD29CC053-29CE-4E90-9596-61DA1F2F555D%257DIMG400.JPG",
    },
    {
        title: "A Court of Mist and Fury",
        author:"Sarah J. Maas",
        image: "https://ic.od-cdn.com/resize?type=auto&width=536&quality=80&force=true&height=715&url=%2FImageType-400%2F2183-1%2F%257BE64DFF4C-8885-4FDB-8B08-3DF7EE07294A%257DIMG400.JPG",
    },
    {
        title: "Hot Mess",
        author:"Jeff Kinney",
        image: "https://ic.od-cdn.com/resize?type=auto&width=536&quality=80&force=true&height=715&url=%2FImageType-400%2F4951-1%2F%257B00A0324C-9587-46AF-AD97-78E06FBA602F%257DIMG400.JPG",
    },
    {
        title: "The Let Them Theory",
        author:"Mel Robbins",
        image:"https://ic.od-cdn.com/resize?type=auto&width=536&quality=80&force=true&height=715&url=%2FImageType-400%2F0111-1%2F%257B31512821-1ACA-4654-9C12-2CCA6B4337DF%257DIMG400.JPG",
    },
    {
        title: "This Is a Book",
        author: "Demetri Marin",
        image: "https://ic.od-cdn.com/resize?type=auto&width=536&quality=80&force=true&height=715&url=%2FImageType-400%2F0017-1%2F7A4%2F8EA%2FEE%2F%257B7A48EAEE-7C55-4721-A471-25FBE4E1744C%257DImg400.jpg",
    },
    {
        title: "Anna & Elsa",
        author: "Disney Books",
        image: "https://ic.od-cdn.com/resize?type=auto&width=536&quality=80&force=true&height=715&url=%2FImageType-400%2F2508-1%2FAF2%2FC43%2F88%2F%257BAF2C4388-41E2-40A8-BFC8-8144EFE10B55%257DImg400.jpg",
    }
    
];

const FeaturedBooks = () => {
    return (
        <div className="feature-books">
            <h2>Featured Books</h2>
            <div className="book-list">
                {books.map((book) => (
                    <div key = {book.title} className="book-item">
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBooks;