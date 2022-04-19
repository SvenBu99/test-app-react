import React from 'react'
import {useRef, useState, useEffect} from 'react';


function Login() {
    const userRef= useRef();
    const errRef = useRef(); /**Error Reader sieht so Fehler */

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd])


  return (
    <section>
        {/**<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>*/}
    </section>
  )
}

export default Login