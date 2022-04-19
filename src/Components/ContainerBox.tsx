import React from 'react'
import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({

    container: {
        maxWidth: "85%",
        backgroundColor: 'rgba(150,25,25,1)',
        borderStyle: 'solid',
        margin: '5%'
    },
    containerSm: {
        maxWidth: "xl"
    },
    image:{
        width: '300px',
        height: '300px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        fontSize: 18,
        margin: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'rgba(230,200,200,1)'
    },
    boxHeader: {
        fontFamily: 'sans-serif',
    textAlign: 'center'
    }
})

function ContainerBox(props: { header: string, image: string, info: string, alt: string }) {
        const classes = useStyles()

        return (
            <div>
                <Container
                    maxWidth="xl"
                    className={`${classes.container}`}
                    disableGutters={true} //same as setting padding: 0 in class
                >
                    <h2 className={classes.boxHeader}>{props.header}</h2>
                    <img className={classes.image} src={props.image} alt={props.alt} />
                    <p className={classes.text}>{props.info}</p>
                </Container>

            </div>
        )
    }

export default ContainerBox