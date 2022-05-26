import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UploadButtons from './UploadButton';
import { color } from '@mui/system';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { useState } from 'react';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.globaldigital.de//">
                dlobaldigital
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [errorTxt, setErrorTxt] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName')
        const lastName = data.get('lastName')
        const email = data.get('email')
        const telefone = data.get('telefone')
        const sellerType = data.get('radio-buttons-group')
        const password = data.get('password')
        const repPassword = data.get('passwordRepeat')
        let signUpArr = [firstName, lastName,email, telefone,sellerType,password]
        console.log(signUpArr)
        checkSubmitComplete(signUpArr)
        checkPasswordValid(password,repPassword)
    };

    const checkSubmitComplete = (arr: (FormDataEntryValue | null)[]) =>{
        for (let item of arr) {
            if (item === ''){
                setBtnDisabled(true)
                setErrorTxt("Bitte füllen Sie alle Felder aus")
                break
            }
        }
        return
    }

    const checkPasswordValid = (pw: any, repeatPw: any) => {
        if (pw != repeatPw){
            setErrorTxt("Die Passwörter stimmen nicht überein")
            return
        }
    }




    return (
        <ThemeProvider theme={theme}>
          <UploadButtons />
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: -2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '5%',
                        width: "100%"
                    }}
                >

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, maxWidth: "sm" }}>
                        
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Typography sx={{ color: 'rgba(58, 141, 170,255)', fontFamily: 'Roboto' , fontWeight: '700'}}>Vorname</Typography>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    fullWidth
                                    required
                                    id="firstName"
                                    autoFocus
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography sx={{ color: 'rgba(58, 141, 170,255)', fontFamily: 'Roboto' , fontWeight: '700' }}>Nachname</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="family-name"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(58, 141, 170,255)', fontFamily: 'Roboto' , fontWeight: '700' }}>E-Mail</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(58, 141, 170,255)', fontFamily: 'Roboto' , fontWeight: '700' }}>E-Mail wiederholen</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="repeat_email"
                                    name="email"
                                    autoComplete="email"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(58, 141, 170,255)', fontFamily: 'Roboto' , fontWeight: '700' }}>Telefon</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="telefone"
                                    name="telefone"
                                    autoComplete="telefone"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid sx={{ display: 'flex', marginTop: '25px', marginLeft: 'auto', marginRight: 'auto' }}>
                                
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Privat"
                                    name="radio-buttons-group"
                                    row
                                >
                                    <FormControlLabel value="Privat" control={<Radio />} label="Privat" />
                                    <FormControlLabel value="Kommerziell" control={<Radio />} label="Kommerziell" />
                                    
                                </RadioGroup>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(58, 141, 170,255)', fontFamily: 'Roboto' , fontWeight: '700' }}>Passwort</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(58, 141, 170,255)', fontFamily: 'Roboto' , fontWeight: '700' }}>Passwort wiederholen</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    name="passwordRepeat"
                                    type="password"
                                    id="passwordRepeat"
                                    autoComplete="new-password"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                        </Grid>
                        <Grid sx={{alignItems: 'center'}}>
                            <p style={{color: 'rgba(207, 48, 48,1)', marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>{errorTxt}</p>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt:4, mb: 2, minHeight: "xs", height: "55px", fontSize: "25px", display: "flex", width: "65%", marginLeft: "auto", marginRight: "auto" , backgroundColor: 'rgba(58, 141, 170,255)' }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="center" sx={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Sie haben bereits einen Account - Anmelden
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 0 }} />
            </Container>
        </ThemeProvider>
    );
}