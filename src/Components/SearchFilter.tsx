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
import Dropdown from './Dropdown';
import DropdownButton from './DropdownButton';
import BasicSelect from './BasicSelect';


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

export default function SearchFilter() {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
          ort: data.get('ort'),
          range: data.get('range'),
          price: data.get('price'),
          category: data.get('category'),
          shipping: data.get('shipping'),
          seller: data.get('seller'),
          offerType: data.get('offerType'),
          order: data.get('order'),

      });
  };


  return (
      <ThemeProvider theme={theme}>
        <Typography sx={{ color: 'gray', fontFamily: 'Roboto' , fontWeight: '400', textAlign: 'center', ml: 'auto', mr: 'auto', mt: '55px', fontStyle: 'italic', fontSize: '25px'}}>Filtern nach</Typography>
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

                  <Box component="form" noValidate onSubmit={handleSearch} sx={{ mt: 3, maxWidth: "sm" }}>
                      
                      <Grid container spacing={3}>
                          <Grid item xs={12} sm={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700'}}>Ort</Typography>
                              <TextField
                                  name="ort"
                                  fullWidth
                                  id="ort"
                                  autoFocus
                                  sx={{ backgroundColor: 'white'}}
                              />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700' }}>Reichweite</Typography>
                              <TextField
                                  fullWidth
                                  id="range"
                                  name="range"
                                  sx={{ backgroundColor: 'white' }}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700' }}>Preis bis</Typography>
                              <TextField
                                  fullWidth
                                  id="price"
                                  name="price"
                                  sx={{ backgroundColor: 'white' }}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700' }}>Kategorie</Typography>
                              <BasicSelect usedBy='category'/>

                          </Grid>
                          <Grid item xs={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700' }}>Versand</Typography>
                              <BasicSelect usedBy='shipping'/>
                          </Grid>
                          <Grid item xs={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700' }}>Verkäufer</Typography>
                              <BasicSelect usedBy='seller'/>
                          </Grid>
                          <Grid item xs={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700' }}>Angebotstyp</Typography>
                              <BasicSelect usedBy='offerType'/>
                          </Grid>
                          <Grid item xs={12}>
                              <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto' , fontWeight: '700' }}>Reihenfolge</Typography>
                              <BasicSelect usedBy='order'/>
                          </Grid>
                      </Grid>
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 4, mb: 2, minHeight: "xs", height: "55px", fontSize: "25px", display: "flex", width: "65%", marginLeft: "auto", marginRight: "auto" }}
                      >
                          Suchen
                      </Button>
  
                  </Box>
              </Box>
              <Copyright sx={{ mt: 0 }} />
          </Container>
      </ThemeProvider>
  );
}