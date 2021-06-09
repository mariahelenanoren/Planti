import { makeStyles } from '@material-ui/core/styles';

export const globalStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex',
    },
    flex1: {
        flex: 1,
    },
    maxWidth: {
        maxWidth: '100rem',
        margin: 'auto !important',
    },
    padding: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: '2.5rem',
            paddingLeft: '2.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            paddingRight: '1.5rem',
            paddingLeft: '1.5rem',
        },
        paddingRight: '4.5rem',
        paddingLeft: '4.5rem',
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCenter: {
        textAlign: 'center',
    },
    link: {
        color: 'inherit',
        textDecoration: 'inherit',
    },
}));
