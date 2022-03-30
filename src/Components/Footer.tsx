import React from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';


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
    cnt: {
        top: '99%',
        buttom: '1%'
    }
})

function Footer() {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.cnt}>

                <AppBar className={classes.appbar}>
                    <Toolbar className={classes.appbar}>
                        <div className={classes.elements}>
                            {/**<Typography>Today: {format(new Date(), 'd MMMM Y')}</Typography>*/}
                            <Avatar className={classes.avatar} src="/Images/Logo.jpg" />
                            <Typography className={classes.navbarContent}>Unsere Etablisments</Typography>
                            <Typography className={classes.navbarContent}>Services und Dienstleistungen</Typography>
                            <Typography className={classes.navbarContent}>Unsere Dienstleister</Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Footer