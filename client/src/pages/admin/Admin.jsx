import React, { useEffect, useState } from 'react'
import styles from './admin.module.css'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'



function Admin() {

  const [name, setName] = useState('');
  const [ingredients, setIng] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newFood = { name, ingredients, price, image };
    axios.post('http://localhost:5000/api/products', newFood, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        alert('Piatto aggiunto con successo!');
        // Puoi anche reimpostare i campi del form
        setName('');
        setIng('');
        setPrice('');
        setImage('');
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          alert(`Errore: ${err.response.data.message}`);
        } else {
          alert('Si è verificato un errore imprevisto.');
        }
      });
  }

  //convertire/decode un immagine in Base64 
  function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=() => {
      console.log(reader.result);
    };
    reader.onerror = error => {
      console.log("Error", error);
    }
  }
  return (
    <>
      <Navbar />
      <form className={styles.form} onSubmit={handleSubmit}>

        <label>Titolo:</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        <label>Ingredienti:</label>
        <input type="text" required value={ingredients} onChange={(e) => setIng(e.target.value)} />
        <label>Prezzo:</label>
        <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Immagine:</label>
        <input accept='image/' type="file" value={image} onChange={convertToBase64} />
        <button>Aggingi Piatto</button>

      </form>
    </>
  )
}

export default Admin