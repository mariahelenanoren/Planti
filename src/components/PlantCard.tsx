import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { globalStyles } from '../style/globalStyles';
import { Plant } from '../interfaces';
import { useState } from 'react';
import defaultImage from '../assets/defaultImage.jpg';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        height: '100%',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#ffff',
        '& img': {
            flex: 1,
            margin: 'auto',
            maxHeight: '14rem',
            width: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
        },
        '& h3': {
            wordBreak: 'break-word',
            margin: '0.5rem 0 0 0',
        },
    },
}));

interface Props {
    plant: Plant;
}

export default function PlantCard(props: Props) {
    const [imageSource, setImageSource] = useState(props.plant.imageUrl);
    const classes = useStyles();
    const global = globalStyles();

    return (
        <Link
            className={classNames(classes.card, global.link)}
            to={`/plants/${props.plant.id}`}
        >
            <img
                alt={props.plant.name}
                src={imageSource}
                onError={() => setImageSource(defaultImage)}
            />
            <h3 className={global.textCenter}>{props.plant.name}</h3>
        </Link>
    );
}
