import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../style/ViewbooksPage.css'; 

const ViewbooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // For search input
  const navigate = useNavigate(); // For navigation

  // Fetch all books on page load
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/book");
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching books.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchBooks();
  }, []);
  
  // Handle delete
  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3000/api/book/${bookId}`);
      setBooks(books.filter(book => book._id !== bookId)); // Remove the deleted book from the state
    } catch (err) {
      setError("Error deleting the book.");
      console.error(err);
    }
  };

  // Filter books based on the search term
  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="view-page-container">
      <h1>Books List</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      {loading ? (
        <p>Loading books...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <table className="books-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Price</th>
                <th>Available</th>
                <th>Actions</th> {/* New column for buttons */}
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.price}</td>
                  <td>{book.available ? "Yes" : "No"}</td>
                  <td>
                    {/* Edit and Delete buttons */}
                    <button onClick={() => navigate(`/edit/${book._id}`)} // Navigate to Edit page
                    className="edit-btn">
                      Edit
                    </button>
                    
                    <button onClick={() => handleDelete(book._id)} // Call delete function
                    className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewbooksPage;
