import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../style/AddbooksPage.css'; 

const AddbooksPage = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    available: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:3000/api/book", {
        title: String(inputs.title),
        author: String(inputs.author),
        category: String(inputs.category),
        price: Number(inputs.price),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/view"));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={inputs.title}
          onChange={handleChange}
          name="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={inputs.author}
          onChange={handleChange}
          name="author"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Category</label>
        <input
          id="category"
          type="text"
          value={inputs.category}
          onChange={handleChange}
          name="category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={inputs.price}
          onChange={handleChange}
          name="price"
        />
      </div>
      
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          Available
        </label>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};
const handleSubmit = (e) => {
  e.preventDefault();
  // After submitting the form, we redirect to the view page.
  navigate('/view');
};

export default AddbooksPage;
