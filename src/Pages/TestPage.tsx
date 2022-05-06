import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef } from 'react'
import Footer from '../Components/Footer'
import ResponsiveAppBar from '../Components/ResAppbarMUI'
import Title from '../Components/Title'
import UploadButtons from '../Components/UploadButton'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';


const useStyles = makeStyles({
    cunt: {
        top: '1%',
        position: 'static',
        buttom: '99%',
        textAlign: 'center'
    },
    text: {
        fontSize: 15,
        margin: '0.3%',
        paddingLeft: '6.5%',
        paddingRight: '6.5%',
        textAlign: 'justify'
    },
    root: {
        width: '100%'
    },
    input: {
        marginTop: '1%',
        justifyContent: 'center',
        position: 'absolute'
    },
    btn: {
        fontSize: 30,
        margin: '1%',
        marginBottom: '2%',
        backgroundColor: 'darkred',
        '&:hover': {
          backgroundColor: 'rgba(150,75,15,1)'
        }
    }
})


function TestPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ResponsiveAppBar />
            <Title datenInput='Unsere Testpage' sizeInput={1} />
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate vel lacus sed vestibulum. Curabitur tempus porttitor nisl sit amet congue. Vestibulum vestibulum interdum magna eu ullamcorper. In semper rutrum orci, vitae varius urna maximus elementum. Duis mollis tempor eros. Proin luctus, purus eu fermentum feugiat, diam ante auctor tellus, ut tristique nisi quam tempus lorem. Etiam rhoncus quam ut vehicula porta. Integer eu odio sem. In ultrices iaculis urna, ut suscipit metus vehicula ac. Etiam gravida tortor vel scelerisque semper. Integer viverra, enim vitae ullamcorper tincidunt, felis magna congue enim, in congue felis arcu a ex. Pellentesque arcu risus, semper id lacus quis, congue egestas erat.

                Quisque posuere, est quis accumsan hendrerit, erat eros consectetur eros, non imperdiet tellus eros elementum mauris. Integer sollicitudin nec ex ut eleifend. Etiam a tellus bibendum, ullamcorper tortor at, tincidunt est. Integer ac venenatis mauris. Aliquam erat volutpat. Praesent nec tristique ipsum, nec molestie nisi. Donec urna eros, pellentesque sit amet finibus et, dapibus quis purus. Cras nec purus quis neque venenatis accumsan. Nulla placerat id lorem nec fermentum. Fusce semper nulla eu magna tristique vulputate vitae non odio. Vestibulum dapibus magna sed urna tempus ultricies. Mauris eu arcu sollicitudin, imperdiet arcu et, facilisis enim.

                Phasellus hendrerit risus sed risus feugiat egestas. Aenean mollis, nisi non rutrum pretium, massa turpis ornare nibh, sit amet ornare risus ante vel justo. Cras ut lorem ut ex sodales finibus. Fusce ut quam in lorem blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi rhoncus cursus metus, at blandit turpis porta nec. Mauris finibus porttitor purus id mattis. Quisque ultricies nunc ligula, at elementum felis fringilla a. Nulla vitae eros porta, placerat nisi rhoncus, pulvinar ante. Duis sed gravida tellus. Sed egestas mollis magna, quis semper ex. Mauris faucibus hendrerit vulputate. Pellentesque quis erat maximus, venenatis enim vel, aliquam felis. Nulla gravida est ac risus dapibus, sed gravida libero venenatis.

                Curabitur bibendum, nibh sit amet facilisis volutpat, arcu diam egestas nulla, vitae cursus augue nibh vitae quam. Fusce sit amet rhoncus sapien, vitae ornare arcu. Ut vel diam id turpis sollicitudin placerat non ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse placerat neque elit. Fusce augue est, varius non nisi ac, molestie molestie justo. Pellentesque quis faucibus urna. Praesent dui odio, dignissim eu enim eget, lacinia porta turpis. Suspendisse nec erat vitae arcu bibendum pharetra nec a tellus. Ut vitae egestas magna. Fusce sed dictum nisi. Pellentesque eget orci ac turpis ullamcorper convallis. In lobortis ex sed nibh feugiat facilisis.

                Cras vitae laoreet mi. Curabitur at nunc odio. Donec vestibulum ornare tellus, at maximus mi dignissim sit amet. Aliquam ex enim, vehicula ut rutrum id, pellentesque id turpis. In sollicitudin cursus orci, vitae semper tortor volutpat a. Praesent volutpat commodo dictum. Curabitur molestie nunc nunc, vel faucibus ipsum facilisis non. In quam dolor, consequat sit amet magna a, ultrices auctor ex.</p>

                <div className={classes.cunt}>
                    <UploadButtons/>
                </div>
            <Footer />
        </div>

    )
}

export default TestPage