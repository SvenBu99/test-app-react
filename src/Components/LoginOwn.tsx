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

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://globaldigital.de/">
        globaldigital
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginOwn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: "5%",
            width: '100%'

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, maxWidth: "sm" }}>

            <Grid container spacing={3}>


              <Grid item xs={12}>
                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>E-Mail</Typography>
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
                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Passwort</Typography>
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
                <div style={{ display: 'flex' }}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    sx={{ display: 'flex', ml: 'auto', mr: 'auto' }}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 4, mb: 2, minHeight: "xs", height: "55px", fontSize: "25px", display: "flex", width: "65%", marginLeft: "auto", marginRight: "auto" }}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="center" sx={{ marginTop: '40px', marginBottom: '0px' }}>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Passwort vergessen
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Noch kein Account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}