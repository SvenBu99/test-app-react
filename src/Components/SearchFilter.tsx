import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';


function Copyright(props: any) {
    return (
        <div style={{ bottom: '0', width: '100%' }}>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://www.globaldigital.de//">
                    dlobaldigital
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
        </div>
    );
}

const theme = createTheme();

export default function SearchFilter() {
    //Constant and Handler of Category
    const [categoryVal, setCategoryVal] = React.useState('');
    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryVal(event.target.value as string);
    };

    //Constant and Handler of Shippment
    const [shippmentVal, setShippmentVal] = React.useState('');
    const handleChangeShippment = (event: SelectChangeEvent) => {
        setShippmentVal(event.target.value as string);
    };

    //Constant and Handler of seller
    const [sellerVal, setSellerVal] = React.useState('');
    const handleChangeSeller = (event: SelectChangeEvent) => {
        setSellerVal(event.target.value as string);
    };

    //Constant and Handler of offer
    const [offerVal, setOfferVal] = React.useState('');
    const handleChangeOffer = (event: SelectChangeEvent) => {
        setOfferVal(event.target.value as string);
    };

    //Constant and Handler of order
    const [orderVal, setOrderVal] = React.useState('');
    const handleChangeOrder = (event: SelectChangeEvent) => {
        setOrderVal(event.target.value as string);
    };
    
    //Array with search parameters
    let searchValues: (FormDataEntryValue | null)[] = ['', '100000000', '', '', '', '', '']

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        //Retrieve Value of the two TextFields
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            ort: data.get('ort'),
            price: data.get('price'),
        });

        //Insert values of Select Fields in the Array
        searchValues[0]=data.get('ort')
        searchValues[1]=data.get('price')
        searchValues[2]=categoryVal
        searchValues[3]=shippmentVal
        searchValues[4]=sellerVal
        searchValues[5]=offerVal
        searchValues[6]=orderVal
        console.log(searchValues)

    };
    

    return (
        <ThemeProvider theme={theme}>
            <Typography sx={{ color: 'gray', fontFamily: 'Roboto', fontWeight: '400', textAlign: 'center', ml: 'auto', mr: 'auto', mt: '55px', fontStyle: 'italic', fontSize: '25px' }}>Filtern nach</Typography>
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
                                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Ort</Typography>
                                <TextField
                                    name="ort"
                                    fullWidth
                                    id="ort"
                                    autoFocus
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Preis bis</Typography>
                                <TextField
                                    fullWidth
                                    id="price"
                                    name="price"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Kategorie</Typography>

                                <FormControl fullWidth sx={{ backgroundColor: 'white' }}>

                                    <Select
                                        labelId="demo-simple-select-label2"
                                        id="demo-simple-select"
                                        value={categoryVal}
                                        onChange={handleChangeCategory}
                                    >
                                        <MenuItem value={'Stereoanlagen'}>Stereoanlagen</MenuItem>
                                        <MenuItem value={'Musikboxen'}>Musikboxen</MenuItem>
                                        <MenuItem value={'Plattenspieler'}>Plattenspieler</MenuItem>
                                        <MenuItem value={'Zubehör'}>Zubehör</MenuItem>

                                    </Select>
                                </FormControl>


                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Versand</Typography>
                                {/*<BasicSelect usedBy='shipping' />*/}
                                <FormControl fullWidth sx={{ backgroundColor: 'white' }}>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={shippmentVal}
                                        onChange={handleChangeShippment}
                                    >
                                        <MenuItem value={'Abholung'}>Abholung</MenuItem>
                                        <MenuItem value={'Standardversand'}>Standardversand</MenuItem>
                                        <MenuItem value={'Eil-Versand'}>Eil-Versand</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Verkäufer</Typography>
                                {/*<BasicSelect usedBy='seller' />*/}
                                <FormControl fullWidth sx={{ backgroundColor: 'white' }}>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={sellerVal}
                                        onChange={handleChangeSeller}
                                    >
                                        <MenuItem value={'Privatverkäufer'}>Privatverkäufer</MenuItem>
                                        <MenuItem value={'Gewerblicher Anbieter'}>Gewerblicher Anbieter</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Angebotstyp</Typography>
                                {/*<BasicSelect usedBy='offerType' />*/}
                                <FormControl fullWidth sx={{ backgroundColor: 'white' }}>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={offerVal}
                                        onChange={handleChangeOffer}
                                    >
                                        <MenuItem value={'Sofortkauf'}>Sofortkauf</MenuItem>
                                        <MenuItem value={'Auktion'}>Auktion</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'rgba(0, 153, 255,0.57)', fontFamily: 'Roboto', fontWeight: '700' }}>Reihenfolge</Typography>
                                {/*<BasicSelect usedBy='order' />*/}
                                <FormControl fullWidth sx={{ backgroundColor: 'white' }}>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={orderVal}
                                        onChange={handleChangeOrder}
                                    >
                                        <MenuItem value={'Neuste Angebote zuerst'}>Neuste Angebote zuerst</MenuItem>
                                        <MenuItem value={'Älteste Angebote zuerst'}>Älteste Angebote zuerst</MenuItem>
                                        <MenuItem value={'Günstigste Angebote zuerst'}>Günstigste Angebote zuerst</MenuItem>
                                        <MenuItem value={'Teuerste Angebote zuerst'}>Teuerste Angebote zuerst</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 4, minHeight: "xs", height: "55px", fontSize: "25px", display: "flex", width: "65%", marginLeft: "auto", marginRight: "auto" }}
                        >
                            Suchen
                        </Button>

                    </Box>
                </Box>
            </Container>
            <Copyright sx={{ mt: 2 }} />
        </ThemeProvider>
    );
}