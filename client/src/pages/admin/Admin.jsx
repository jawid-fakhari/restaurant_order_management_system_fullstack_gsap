import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import { Button, Container, TextField, Typography, Stack, Box } from '@mui/material';

function Admin() {

  const [name, setName] = useState('');
  const [ingredients, setIng] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [imageName, setImageName] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newFood = { name, ingredients, price, image };
    axios.post('http://localhost:5000/api/products', newFood, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {//dopo post avvisa e svuota i campi
        alert('Piatto aggiunto con successo!');
        setName('');
        setIng('');
        setPrice('');
        setImage('');
        setImageName('');
      })
      .catch(err => {
        alert('Si è verificato un errore imprevisto.');
        console.log(err);
      });
  }

  let imageUpload = '';
  function convertToBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      imageUpload = e.target.files[0].name;
      setImageName(imageUpload);
      setImage(reader.result);
    };
    reader.onerror = error => {
      console.log("Error", error);
    };
  }

  const handleNavigate = () => {
    navigate('/tables');
  };

  //remove isLogedIn dal localStorage
  const handleLogout = () => {
    window.localStorage.removeItem("isLogedIn"); // rimuovi dal local storage isLogIn 
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" gutterBottom color="#ea8116">
            User: {/* qui il nome del user andra*/}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ea8116',
              '&:hover': {
                backgroundColor: '#cc6e14',
              }
            }}
          onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>


        {/* Sezione per Aggiungere Piatti */}
        <Stack
          marginBottom={4}
          spacing={2}
          padding={3}
          sx={{
            border: 1,
            borderRadius: 2,
            borderColor: 'grey.500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h4" gutterBottom color="#ea8116">
            Aggiungere Nuovi Piatti
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Titolo"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Ingredienti"
              variant="outlined"
              fullWidth
              required
              value={ingredients}
              onChange={(e) => setIng(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Prezzo"
              variant="outlined"
              fullWidth
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            <Stack direction="column" spacing={2} alignItems="flex-start">
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="outlined"
                  component="label"
                  sx={{ borderColor: '#ea8116', color: '#ea8116', '&:hover': { backgroundColor: '#ffe0cc' } }}
                >
                  Carica Immagine
                  <input
                    accept="image/*"
                    type="file"
                    hidden
                    onChange={convertToBase64}
                  />
                </Button>
                <Typography>{imageName}</Typography>
              </Stack>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#ea8116',
                  '&:hover': {
                    backgroundColor: '#cc6e14',
                  },
                }}
              >
                Aggiungi Piatto
              </Button>
            </Stack>
          </form>
        </Stack>

        {/* Sezione Gestione Tavoli */}
        <Stack
          marginBottom={2}
          spacing={2}
          padding={3}
          sx={{
            border: 1,
            borderRadius: 2,
            borderColor: 'grey.500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom color="#ea8116">
            Gestione Tavoli
          </Typography>
          <Button
            variant="contained"
            onClick={handleNavigate}
            sx={{
              backgroundColor: '#ea8116',
              '&:hover': {
                backgroundColor: '#cc6e14',
              },
            }}
          >
            Vai alla gestione dei Tavoli
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export default Admin;
