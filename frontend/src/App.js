import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import banner from './assests/banner.png';
import axios from 'axios'; // Import Axios

function App() {
  const [formData, setFormData] = useState({
    title: '',
    writer: '',
    description: '',
    price: '',
    available: '',
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('writer', formData.writer);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('available', formData.available);
      formDataToSend.append('image', formData.image);

      // Send a POST request to your Express API using Axios
      const response = await axios.post('http://localhost:8000/createbook', formDataToSend);

      if (response.status === 201) {
        // Successfully created the book
        // You can handle success here, e.g., show a success message or redirect to another page.
        console.log('Book created successfully');
      } else {
        // Handle error
        console.error('Error:', response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <div className='row mx-0 p-3'>
          <div className='col-lg-6 col-md-12 d-flex justify-content-center gap-5 flex-column'>
            <h1 style={{ fontSize: '54px' }}>
              MADHAV SINGH <br />
              BOOK SHOP
            </h1>
            <p className='hero-para'>
              <li>Where stories come to life.</li>
              <li>Discover worlds within our pages.</li>
              <li>Get lost in the magic of words.</li>
            </p>
            <div>
              <button className='btn btn-main'>Explore Collection</button>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <img src={banner} alt="" className='img-fluid' />
          </div>
        </div>
      </div>
      
      <div>
        <form onSubmit={handleSubmit} className='mx-auto w-50'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="writer" className="form-label">Writer:</label>
            <input
              type="text"
              className="form-control"
              id="writer"
              name="writer"
              value={formData.writer}
              onChange={(e) => setFormData({ ...formData, writer: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="available" className="form-label">Available:</label>
            <input
              type="boolean"
              className="form-control"
              id="available"
              name="available"
              value={formData.available}
              onChange={(e) => setFormData({ ...formData, available: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image:</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
