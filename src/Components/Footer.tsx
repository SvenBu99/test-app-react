import React from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';




const useStyles = makeStyles({
    avatar: {
        margin: 20
    },
    username: {
        margin: 10,
        textAlign: 'center',
        fontSize: 60
    },
    appbar: {

        backgroundColor: 'darkgray',
        position: 'absolute'
    },
    navbarContent: {
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 40,
        '&:hover': {
            backgroundColor: 'rgba(50,25,15,1)',
            borderRadius: 30,
            fontSize: 20
        }
    },
    navbarContentPic: {
        display: 'flex',
        alignItems: 'center'
    },
    elements: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%"
    },
    cunt: {
        top: '1%',
        position: 'static',
        buttom: '99%'
    },
    footer: {
        marginTop: '5%'
    }
})

function Footer() {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <footer className={classes.footer}>
            <Box
                px={{ xs: 3, sm: 5 }}
                py={{ xs: 5, sm: 5 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <p>test</p>
                            </Box>
                            <Box>
                                <p>begeg</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <p>WOWOWO</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <p>WOWOWO</p>
                            </Box>
                            <Box>
                                <p>WOWOWO</p>
                            </Box>
                            <Box>
                                <p>begeg</p>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
                        TH-Experience &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer