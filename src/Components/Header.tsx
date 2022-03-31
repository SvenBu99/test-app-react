import React from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Toolbar, Typography } from '@mui/material'
import format from 'date-fns/format'
import { Avatar } from '@mui/material';
import { borderRadius, flexbox } from '@mui/system';
import { blue } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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

    backgroundColor: 'darkred',
    position: 'relative'
  },
  navbarContent: {
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 40,
    '&:hover': {
      backgroundColor: 'rgba(150,25,15,1)',
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
  }
})

function Header() {
  const classes = useStyles()

  const navigate = useNavigate()

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbar}>
          <div className={classes.elements}>
            {/**<Typography>Today: {format(new Date(), 'd MMMM Y')}</Typography>*/}
            <Avatar className={classes.avatar} src="/Images/Logo.jpg" onClick={()=>navigate("/")}/>
            <Typography className={classes.navbarContent} onClick={()=>navigate("/Etablisments")}>Unsere Etablisments</Typography>
            <Typography className={classes.navbarContent} onClick={()=>navigate("/Services")}>Services und Dienstleistungen</Typography>
            <Typography className={classes.navbarContent} onClick={()=>navigate("/Dienstleister")}>Unsere Dienstleister</Typography>
            <div className={classes.navbarContentPic}>
              <Typography className={classes.username} >Shrek</Typography>
              <Avatar className={classes.avatar} src="/Images/shrek.jpg" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header