import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../style/Editbook.css';

const Editbook = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    available: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the book details when the page loads
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/book/${id}`);
        setInputs({
          title: response.data.title,
          author: response.data.author,
          category: response.data.category,
          price: response.data.price,
          available: response.data.available,
        });
        setLoading(false);
      } catch (err) {
        setError("Error fetching book details.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchBook();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setInputs((prevState) => ({
      ...prevState,
      available: !prevState.available,
    }));
  };

  // Update book details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/book/${id}`, {
        ...inputs,
        price: Number(inputs.price),
        available: Boolean(inputs.available),
      });
      navigate("/view"); 
      console.log("Book updated")// Redirect to the view page after updating
    } catch (err) {
      setError("Error updating the book.");
      console.error(err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="edit-book-container">
      <h1>Edit Book</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            name="author"
            value={inputs.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            name="category"
            value={inputs.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            name="price"
            value={inputs.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={inputs.available}
              onChange={handleCheckboxChange}
            />
            Available
          </label>
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default Editbook;
