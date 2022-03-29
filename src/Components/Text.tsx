import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    text: {
        fontSize: 15,
        margin: '0.3%',
        paddingLeft: '0.1%',
        paddingRight: '0.1%'
    }
  })


function Text({datenInput}: {datenInput:string}) {
    const classes = useStyles()

  return (
    <div className={classes.text}>{datenInput}</div>
  )
}

export default Text