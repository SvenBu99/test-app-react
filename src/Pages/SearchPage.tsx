import { makeStyles } from '@mui/styles'
import ResponsiveAppBar from '../Components/ResAppbarMUI'
import SearchFilter from '../Components/SearchFilter'
import Title from '../Components/Title'


const useStyles = makeStyles({
    cunt: {
        top: '1%',
        position: 'static',
        buttom: '99%',
        textAlign: 'center',
        marginTop: '1%'
    },
    text: {
        fontSize: 15,
        margin: '0.3%',
        paddingLeft: '6.5%',
        paddingRight: '6.5%',
        textAlign: 'justify', 
    },
    root: {
        width: '100%',
        backgroundColor: 'rgba(190,190,190,0.25)'
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


function SearchPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ResponsiveAppBar />

            <SearchFilter/>


        </div>

    )
}

export default SearchPage