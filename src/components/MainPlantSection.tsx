import PlantCard from './PlantCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { globalStyles } from '../style/globalStyles';
import classNames from 'classnames';
import { makeRequest } from '../helper';
import { Plant } from '../interfaces';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    plantSection: {
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
    },
    sectionInner: {
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    scrollContainer: {
        overflowY: 'hidden',
        overflowX: 'auto',
        maxWidth: '100%',
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    buttonCard: {
        padding: '2rem',
        minHeight: '16rem',
        backgroundColor: theme.palette.secondary.main,
        '& p': {
            color: '#ffff',
            fontWeight: 700,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    headline: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2rem',
        },
        paddingRight: '3rem',
        margin: 0,
        fontSize: '1.2rem',
        whiteSpace: 'nowrap',
    },
    cardContainer: {
        width: '14rem',
        height: '100%',
    },
}));

export default function MainPlantSection() {
    const classes = useStyles();
    const global = globalStyles();
    const [plants, setPlants] = useState<Plant[]>();

    const fetchPlants = async () => {
        const response = await makeRequest('/api/plants', 'GET');
        const savedPlants = await response;
        setPlants(savedPlants);
    };

    useEffect(() => {
        fetchPlants();
    }, []);

    return (
        <div className={classNames(classes.plantSection, global.padding)}>
            <div
                className={classNames(
                    classes.sectionInner,
                    global.maxWidth,
                    global.flex
                )}
            >
                <h2 className={classNames(classes.headline)}>Dina Växter</h2>
                <Grid
                    wrap='nowrap'
                    container
                    className={classNames(global.flex, classes.scrollContainer)}
                    spacing={3}
                >
                    {plants
                        ? plants
                              .filter((plant, id) => id < 6)
                              .map((plant) => (
                                  <Grid item key={plant.id}>
                                      <div className={classes.cardContainer}>
                                          <PlantCard plant={plant} />
                                      </div>
                                  </Grid>
                              ))
                        : [1, 2, 3, 4, 5, 6].map((s) => (
                              <Grid item key={s}>
                                  <Skeleton
                                      variant='rect'
                                      height='18.5rem'
                                      width='14rem'
                                  />
                              </Grid>
                          ))}
                    <Grid item>
                        <Link to='/plants' className={global.link}>
                            <div
                                className={classNames(
                                    classes.buttonCard,
                                    classes.cardContainer,
                                    global.flexCenter
                                )}
                            >
                                <p className={global.textCenter}>
                                    Se alla
                                    <br />
                                    dina växter
                                </p>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
