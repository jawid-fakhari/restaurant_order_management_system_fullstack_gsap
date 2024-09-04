import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'



function Admin() {

  const [title, setTitle] = useState('');
  const [ingredients, setIng] = useState('');
  const [price, setPrice] = useState(+'');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newFood = { title, ingredients, price, image };
    axios.post('http://localhost:5000/api/products', newFood)
      .then(res => console.log(res))
      .catch(err => console.log(err));

  }

  return (
    <>
      <Navbar />


      <form onSubmit={handleSubmit}>

        <label>Titolo:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Ingredienti:</label>
        <input type="text" required value={ingredients} onChange={(e) => setIng(e.target.value)} />
        <label>Prezzo:</label>
        <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Immagine:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <button>Aggingi Piatto</button>

      </form>

    </>
  )
}

export default Admin