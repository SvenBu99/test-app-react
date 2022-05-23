import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import {Link, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import BasicModal from './BasicModal';





const useStyles = makeStyles({
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
    },
    linkBox: {
        marginTop: '4%',
        marginBottom: '2%'
    },
    links: {
        color: 'rgba(150,25,15,1)',
        textDecoration: 'none',
        marginTop:'4%', 
        cursor: 'default',
        '&:hover': {
            borderRadius: 30,
            color: 'rgba(160,160,160,1)',
            fontSize: 18
          }
    },
    btn: {
        color: 'white',
        border: 'none',
        backgroundColor: 'inherit',
        cursor: 'pointer',
        fontFamily: 'Montserrat',
        fontSize: 18
    }
})

function Footer() {
    const classes = useStyles()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

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
                            <Box borderBottom={1}>Contact</Box>
                            <Box>
                                <p>Tel: 0173 556 9080</p>
                            </Box>
                            <Box>
                                <p>Anfahrt:</p>
                                <p>Edinsonstraße 30
                                    90439 Nürnberg</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box className={classes.linkBox}>
                            <Typography className={classes.links} onClick={()=>navigate("/TestPage")}>Testpage</Typography>
                            </Box>
                            <Box className={classes.linkBox}>                                {/**<button onClick={() => setIsOpen(true)} className={classes.btn}>Login</button>
                                <Modal open={isOpen} title="Please login or create a new account" onClose={() => setIsOpen(false)} isFooter={true}/>
                                <BasicModal open={isOpen} title="Please login or create a new account" onClose={() => setIsOpen(false)} isFooter={true}/>*/}
                                <Typography className={classes.links} onClick={()=>navigate("/LoginPage")}>Login</Typography>
                            </Box>
                            <Box className={classes.linkBox}>                                
                                <Typography className={classes.links} onClick={()=>navigate("/SearchPage")}>Search Page</Typography>
                            </Box>
                            <Box>
                                <p>Cookie-Einstellungen</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Neuigkeiten</Box>
                            <Box className={classes.linkBox}>
                               <a className={classes.links} href='https://www.th-nuernberg.de/person/trommler-peter/'>Blog</a>
                            </Box>
                            <Box className={classes.linkBox}>
                                <a className={classes.links} href="https://.instagram.com/pornhub/?hl=de">Instagram</a>  
                            </Box>
                            <Box className={classes.linkBox}>
                                <a className={classes.links} href="https://www.instagram.com/wernerfrankfurt/?hl=en">Events</a>
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