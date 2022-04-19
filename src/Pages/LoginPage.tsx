import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Title from '../Components/Title'
import Modal from '../Components/Modal'
import Login from '../Components/Login'
import ResponsiveAppBar from '../Components/ResAppbarMUI'



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
        fontSize: 15,
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
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#FFF',
        padding: '50px',
        zIndex: 1000
    }
})


function LoginPage() {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {/**<Header />*/}
            <ResponsiveAppBar />
            <Title datenInput='Login oder Registrierung für Premium-Content' sizeInput={1} />
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate vel lacus sed vestibulum. Curabitur tempus porttitor nisl sit amet congue. Vestibulum vestibulum interdum magna eu ullamcorper. In semper rutrum orci, vitae varius urna maximus elementum. Duis mollis tempor eros. Proin luctus, purus eu fermentum feugiat, diam ante auctor tellus, ut tristique nisi quam tempus lorem. Etiam rhoncus quam ut vehicula porta. Integer eu odio sem. In ultrices iaculis urna, ut suscipit metus vehicula ac. Etiam gravida tortor vel scelerisque semper. Integer viverra, enim vitae ullamcorper tincidunt, felis magna congue enim, in congue felis arcu a ex. Pellentesque arcu risus, semper id lacus quis, congue egestas erat.

                Aliquam vel porta nisi. Proin mattis mi et iaculis molestie. Proin non metus lectus. Mauris quam lacus, elementum nec viverra et, ultrices eu enim. Ut nisi ex, porta sit amet diam at, posuere facilisis sem. Morbi tristique, odio eu hendrerit rutrum, lacus tellus consequat mi, vel tincidunt magna magna vitae ante. Nulla at urna nisl. Aliquam vulputate lectus vel augue lacinia, at varius sem convallis.

                Praesent aliquam suscipit turpis nec tincidunt. Nam ligula odio, bibendum eu augue a, fermentum congue sem. Proin tortor justo, accumsan vitae lacus hendrerit, hendrerit fermentum sapien. Sed ullamcorper lectus vitae tortor accumsan elementum dictum ac metus. Sed id ante suscipit, sollicitudin lectus ac, laoreet neque. Sed vehicula aliquam iaculis. Nulla vulputate neque vehicula, finibus risus non, tincidunt lacus. Sed at turpis vehicula tortor sollicitudin tempor. In hac habitasse platea dictumst. Ut in sodales tellus. Fusce sit amet neque in nisi varius tristique. Vivamus vitae vestibulum tellus. Sed molestie quam dui, ac lacinia tortor finibus at. Praesent sodales velit ac turpis hendrerit pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris condimentum sit amet felis ut hendrerit.

                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nec nisl a ante maximus auctor at nec lorem. Suspendisse potenti. Morbi malesuada tortor vel commodo consequat. Pellentesque dictum risus quis tincidunt tristique. Nullam ultricies aliquam sollicitudin. Quisque rutrum ultrices rhoncus. Nullam commodo viverra turpis non pellentesque. Pellentesque suscipit mattis ipsum, non pretium lectus pretium et. Donec lacinia, ligula vitae imperdiet fringilla, dolor lorem vulputate lacus, at placerat libero lorem eu turpis. Nulla suscipit mauris sed ante sodales lacinia.

                Sed suscipit massa nec augue molestie mollis. Mauris sem nibh, cursus vel nibh vitae, aliquet condimentum leo. Morbi sed sem vestibulum, consectetur odio ut, elementum arcu. In venenatis mi vel nisi malesuada commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sed metus iaculis, volutpat risus ac, elementum arcu. Mauris consequat orci est, vitae consequat turpis commodo sit amet. Pellentesque laoreet massa justo, vel tincidunt tellus lacinia sed. Nunc lorem nunc, vulputate et scelerisque finibus, mattis vel eros. Integer accumsan quis lacus eu dapibus. Mauris pulvinar mi odio, vitae imperdiet felis sollicitudin a.

                Sed scelerisque ante molestie, suscipit leo ac, iaculis magna. Vestibulum porta sem ante, malesuada tristique metus luctus vitae. Cras ante mauris, venenatis nec libero vitae, sodales auctor enim. Aliquam ac ipsum non mi malesuada viverra. Integer laoreet ligula iaculis lorem pellentesque iaculis. Donec cursus lobortis turpis a bibendum. Morbi ac nisl a orci pulvinar cursus. Vivamus quis lacus euismod, semper metus et, elementum est. Integer iaculis nisl mattis auctor scelerisque. Fusce sit amet pulvinar nibh. In lacus dolor, elementum et dapibus at, tincidunt et nisi. Phasellus commodo eleifend interdum.

                Proin sed congue velit, non tincidunt nisl. Quisque posuere, est quis accumsan hendrerit, erat eros consectetur eros, non imperdiet tellus eros elementum mauris. Integer sollicitudin nec ex ut eleifend. Etiam a tellus bibendum, ullamcorper tortor at, tincidunt est. Integer ac venenatis mauris. Aliquam erat volutpat. Praesent nec tristique ipsum, nec molestie nisi. Donec urna eros, pellentesque sit amet finibus et, dapibus quis purus. Cras nec purus quis neque venenatis accumsan. Nulla placerat id lorem nec fermentum. Fusce semper nulla eu magna tristique vulputate vitae non odio. Vestibulum dapibus magna sed urna tempus ultricies. Mauris eu arcu sollicitudin, imperdiet arcu et, facilisis enim.

                Phasellus hendrerit risus sed risus feugiat egestas. Aenean mollis, nisi non rutrum pretium, massa turpis ornare nibh, sit amet ornare risus ante vel justo. Cras ut lorem ut ex sodales finibus. Fusce ut quam in lorem blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi rhoncus cursus metus, at blandit turpis porta nec. Mauris finibus porttitor purus id mattis. Quisque ultricies nunc ligula, at elementum felis fringilla a. Nulla vitae eros porta, placerat nisi rhoncus, pulvinar ante. Duis sed gravida tellus. Sed egestas mollis magna, quis semper ex. Mauris faucibus hendrerit vulputate. Pellentesque quis erat maximus, venenatis enim vel, aliquam felis. Nulla gravida est ac risus dapibus, sed gravida libero venenatis.

                Curabitur bibendum, nibh sit amet facilisis volutpat, arcu diam egestas nulla, vitae cursus augue nibh vitae quam. Fusce sit amet rhoncus sapien, vitae ornare arcu. Ut vel diam id turpis sollicitudin placerat non ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse placerat neque elit. Fusce augue est, varius non nisi ac, molestie molestie justo. Pellentesque quis faucibus urna. Praesent dui odio, dignissim eu enim eget, lacinia porta turpis. Suspendisse nec erat vitae arcu bibendum pharetra nec a tellus. Ut vitae egestas magna. Fusce sed dictum nisi. Pellentesque eget orci ac turpis ullamcorper convallis. In lobortis ex sed nibh feugiat facilisis.

                Cras vitae laoreet mi. Curabitur at nunc odio. Donec vestibulum ornare tellus, at maximus mi dignissim sit amet. Aliquam ex enim, vehicula ut rutrum id, pellentesque id turpis. In sollicitudin cursus orci, vitae semper tortor volutpat a. Praesent volutpat commodo dictum. Curabitur molestie nunc nunc, vel faucibus ipsum facilisis non. In quam dolor, consequat sit amet magna a, ultrices auctor ex.</p>
            <Login/>
            <p className={classes.text}>Phasellus hendrerit risus sed risus feugiat egestas. Aenean mollis, nisi non rutrum pretium, massa turpis ornare nibh, sit amet ornare risus ante vel justo. Cras ut lorem ut ex sodales finibus. Fusce ut quam in lorem blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi rhoncus cursus metus, at blandit turpis porta nec. Mauris finibus porttitor purus id mattis. Quisque ultricies nunc ligula, at elementum felis fringilla a. Nulla vitae eros porta, placerat nisi rhoncus, pulvinar ante. Duis sed gravida tellus. Sed egestas mollis magna, quis semper ex. Mauris faucibus hendrerit vulputate. Pellentesque quis erat maximus, venenatis enim vel, aliquam felis. Nulla gravida est ac risus dapibus, sed gravida libero venenatis.

                Curabitur bibendum, nibh sit amet facilisis volutpat, arcu diam egestas nulla, vitae cursus augue nibh vitae quam. Fusce sit amet rhoncus sapien, vitae ornare arcu.</p>

            <Footer />
        </div>
    )
}

export default LoginPage