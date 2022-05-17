import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Title from '../Components/Title'
import ResponsiveAppBar from '../Components/ResAppbarMUI'
import monte from '../Backend/kuss-diga-monte.gif'
import SignUp from '../Components/SignUp'
import SignUpOwn from '../Components/SignUpOwn'
import LoginOwn from '../Components/LoginOwn'

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
    text: {
        fontSize: 18,
        margin: '0.3%',
        paddingLeft: '6.5%',
        paddingRight: '6.5%',
        textAlign: 'justify'
    },
    enum: {
        fontSize: 20,
        margin: '2%',
        textAlign: 'center'
    },
    enumElem: {
        margin: '0.2%'
    },
    btn: {
        fontSize: 30,
        backgroundColor: 'darkred',
        '&:hover': {
            backgroundColor: 'rgba(150,75,15,1)'  
        },
        alignContent: 'center',
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '25px',
        zIndex: 1000,
        marginTop: '30px'

    },
    modal: {
        top: '50%',
        left: '50%',
        padding: '50px'
    },
    gif:{
        height: '25%', 
        width: '25%',
        display: 'block',
        margin: '5%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }
})


function LoginPage() {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div style={{backgroundColor: 'rgba(190,190,190,0.25)'}}>
            <ResponsiveAppBar />
            <Title datenInput='Login oder Registrierung für Premium-Content' sizeInput={1} />
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate vel lacus sed vestibulum. Curabitur tempus porttitor nisl sit amet congue. Vestibulum vestibulum interdum magna eu ullamcorper. In semper rutrum orci, vitae varius urna maximus elementum. Duis mollis tempor eros. Proin luctus, purus eu fermentum feugiat, diam ante auctor tellus, ut tristique nisi quam tempus lorem. Etiam rhoncus quam ut vehicula porta. Integer eu odio sem. In ultrices iaculis urna, ut suscipit metus vehicula ac. Etiam gravida tortor vel scelerisque semper. Integer viverra, enim vitae ullamcorper tincidunt, felis magna congue enim, in congue felis arcu a ex. Pellentesque arcu risus, semper id lacus quis, congue egestas erat.

                Curabitur bibendum, nibh sit amet facilisis volutpat, arcu diam egestas nulla, vitae cursus augue nibh vitae quam. Fusce sit amet rhoncus sapien, vitae ornare arcu. Ut vel diam id turpis sollicitudin placerat non ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse placerat neque elit. Fusce augue est, varius non nisi ac, molestie molestie justo. Pellentesque quis faucibus urna. Praesent dui odio, dignissim eu enim eget, lacinia porta turpis. Suspendisse nec erat vitae arcu bibendum pharetra nec a tellus. Ut vitae egestas magna. Fusce sed dictum nisi. Pellentesque eget orci ac turpis ullamcorper convallis. In lobortis ex sed nibh feugiat facilisis.

                Cras vitae laoreet mi. Curabitur at nunc odio. Donec vestibulum ornare tellus, at maximus mi dignissim sit amet. Aliquam ex enim, vehicula ut rutrum id, pellentesque id turpis. In sollicitudin cursus orci, vitae semper tortor volutpat a. Praesent volutpat commodo dictum. Curabitur molestie nunc nunc, vel faucibus ipsum facilisis non. In quam dolor, consequat sit amet magna a, ultrices auctor ex.</p>
            <SignUp/>
            <LoginOwn/>
                        
            <img className={classes.gif} src={monte} alt='Kuss Digga...'/>
            <p className={classes.text}>Phasellus hendrerit risus sed risus feugiat egestas. Aenean mollis, nisi non rutrum pretium, massa turpis ornare nibh, sit amet ornare risus ante vel justo. Cras ut lorem ut ex sodales finibus. Fusce ut quam in lorem blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi rhoncus cursus metus, at blandit turpis porta nec. Mauris finibus porttitor purus id mattis. Quisque ultricies nunc ligula, at elementum felis fringilla a. Nulla vitae eros porta, placerat nisi rhoncus, pulvinar ante. Duis sed gravida tellus. Sed egestas mollis magna, quis semper ex. Mauris faucibus hendrerit vulputate. Pellentesque quis erat maximus, venenatis enim vel, aliquam felis. Nulla gravida est ac risus dapibus, sed gravida libero venenatis.

                Curabitur bibendum, nibh sit amet facilisis volutpat, arcu diam egestas nulla, vitae cursus augue nibh vitae quam. Fusce sit amet rhoncus sapien, vitae ornare arcu.</p>

            <Footer />
        </div>
    )
}

export default LoginPage