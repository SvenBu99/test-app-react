import React from 'react'
import { makeStyles } from '@mui/styles'
import { ClassNames } from '@emotion/react'
import { render } from '@testing-library/react'



const useStyles = makeStyles({
  title: {
    textDecoration: 'bold',
    position: 'relative',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 120,
    fontSize: 50,
    fontFamily: 'Montserrat'
  },
  titleTwo: {
    textDecoration: 'bold',
    position: 'relative',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 120,
    fontSize: 38,
    fontFamily: 'Montserrat'
  },
  titleThree: {
    textDecoration: 'bold',
    position: 'relative',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 120,
    fontSize: 30,
    fontFamily: 'Montserrat'
  }
})


const Title = (props: { datenInput: string, sizeInput: number }) => {
  const classes = useStyles()
  
  if (props.sizeInput == 1) {
    return <>{
        <div className={classes.title}>{props.datenInput}</div>
    }</>
      
  }
  else if (props.sizeInput == 2) {
    return <>{
      <div className={classes.titleTwo}>{props.datenInput}</div>
      }</>
    }
  else {
    return <>{
      <div className={classes.titleThree}>{props.datenInput}</div>
      }</>
    }

    

}

export default Title