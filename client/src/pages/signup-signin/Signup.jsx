import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newRegistration = { nome, email, password };
        console.log(newRegistration);
        
        axios.post('http://localhost:5000/api/signup', newRegistration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                //dopo registrazione avvisa e svuota i campi
                //poi da capire dove va al login o direttamente al admin
                alert('Nuovo membro è stato registrato!');
                setNome('');
                setEmail('');
                setPassword('');
                navigate('/login');
            })
            .catch(err => {
                alert('Si è verificato un errore imprevisto.');
                console.log(err);
            })
    }
  return (
      <>
          <Navbar />
          <Container sx={{ marginTop: 4 }}>
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
                      Registrazione
                  </Typography>

                  <form onSubmit={handleSubmit}>
                      <TextField
                          label="Nome"
                          variant="outlined"
                          fullWidth
                          required
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          sx={{ marginBottom: 2 }}
                      />
                      <TextField
                          label="Email"
                          variant="outlined"
                          fullWidth
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          sx={{ marginBottom: 2 }}
                      />
                      <TextField
                          label="Password"
                          variant="outlined"
                          type='password'
                          fullWidth
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          sx={{ marginBottom: 2 }}
                      />

                      <Stack direction="column" spacing={2} alignItems="flex-start">
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
                              Registrazione
                          </Button>
                      </Stack>
                  </form>
                  <Stack direction="column" spacing={2} alignItems="flex-start">
                      <Typography>
                        Sei gia registrato?
                    </Typography>
                      <Button
                          component={Link}
                          to="/login"
                          variant="contained"
                          sx={{
                              backgroundColor: '#ea8116',
                              '&:hover': {
                                  backgroundColor: '#cc6e14',
                              },
                          }}
                      >
                          Login
                      </Button>
                  </Stack>
              </Stack>
          </Container>
      </>
  )
}

export default Signup