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
    fontSize: 40,
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

function Title({ datenInput }: { datenInput: string}) {
  const classes = useStyles()

  return (
    <div className={classes.title}>{datenInput}</div>
  )
}

/**const Title = (props: { datenInput: string, sizeInput: number }) => {
  const classes = useStyles()
  
  if (props.sizeInput == 1) {
    // return <h1 className={classes.title}> {props.datenInput}</h1>
    return <>{
        <div className={classes.title}>{props.datenInput}</div>
    }</>
      
  }
  else if (props.sizeInput == 2) {
    //return <h2 className={classes.title}> {props.datenInput}</h2>
    return <>{
      <div className={classes.titleTwo}>{props.datenInput}</div>
      }</>
    }
  else if (props.sizeInput == 3) {
    //return <h3 className={classes.title}> {props.datenInput}</h3>
    return <>{
      <div className={classes.titleThree}>{props.datenInput}</div>
      }</>
    }

    

}*/

export default Title