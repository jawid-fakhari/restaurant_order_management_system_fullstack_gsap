import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const loginData = { email, password };
        axios.post('http://localhost:5000/api/login', loginData)
            .then(res => {
                if (res.data === "Success") {
                    window.localStorage.setItem("isLogedIn", true);// se seccess allora salva in local storage isLogIn.
                    navigate("/admin") // e passa al admin page.
                } else {
                    alert("Passowrd o Email errato.")
                }
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
                        Login
                    </Typography>

                    <form onSubmit={handleSubmit}>
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
                                Login
                            </Button>
                        </Stack>
                    </form>
                    <Stack direction="column" spacing={2} alignItems="flex-start">
                        <Typography>
                            Non sei gia registrato?
                        </Typography>
                        <Button
                            component={Link}
                            to="/signup"
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
                </Stack>
            </Container>
        </>
    )
}

export default Login