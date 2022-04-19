import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  box: {
    borderStyle: 'solid',
    margin: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    padding: '1%',
    display: 'flex',
    backgroundColor: 'rgba(150,25,25,1)'
  },
  elements: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%"
  },
  text: {
    fontSize: 18,
    margin: '0.2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'rgba(230,200,200,1)'
  },
  boxHeader: {
    fontFamily: 'sans-serif',
    textAlign: 'center'

  },
  image: {
    width: '250px',
    height: '250px',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  imgCol: {
    textAlign: 'center',
    width: '400%'
  },
  textCol: {
    textAlign: 'justify',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%'

  },
  root: {
    width: '100%'
  }
})

function ContentBox(props: { header: string, image: string, info: string, alt: string }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <div className={classes.box}>
        <div className={classes.imgCol}>
          <h2 className={classes.boxHeader}>{props.header}</h2>
          <img className={classes.image} src={props.image} alt={props.alt} />
        </div>
        <div className={classes.textCol}>
          <p className={classes.text}>{props.info}</p>
        </div>
      </div>
    </div>
  )
}



export default ContentBox