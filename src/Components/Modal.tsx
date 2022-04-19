import { makeStyles } from '@mui/styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'
import monte from '../Backend/kuss-diga-monte.gif'

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    margin: '1%', 
    marginBottom: '2%', 
    backgroundColor: 'darkred', 
    '&:hover': { backgroundColor: 'rgba(150,75,15,1)' }, 
    position: 'relative',
    left: '38%',
    bottom: '70%'
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    display: 'flex'
  },
  text:{
    fontFamily: 'sans-serif',
    margin: '1%'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'sans-serif'
  },
  overlay: {
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000
  },
  formElements:{
    margin: '1%',
    fontFamily: "sans-serif", 
    fontSize: 18,
    position: 'relative'
  },
  formSubmit:{
    margin: '1%'
  },
  gif:{
    height: '40%', 
    width: '40%'
  }

})

type Inputs={
  email: string;
  password: string;
}

function Modal(props: { open: boolean, title: string, onClose: any, isFooter: boolean }) {
  const classes = useStyles()

  const {register, handleSubmit, reset} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  if (props.open == false) {
    return null
  }


  return (
    <>
    <div className={classes.overlay}/>
    <div className={classes.modal}>
    <img className={classes.gif} src={monte} alt='Kuss Digga...'/>
      
      <p className={classes.title}>{props.title}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={classes.formElements}>Email</p>
        <input className={classes.formElements} type='text' {...register("email")}/>
        <p className={classes.formElements}>Password</p>
        <input
          className={classes.formElements}
          type="password"
          {...register("password", {
            required: true,

          })}
          />
        <input className={classes.formSubmit}type='submit' />
        <button onClick={props.onClose} className={classes.btn}>Close Modal</button>
      </form>
      
    </div>
    </>
  )
}

export default Modal

