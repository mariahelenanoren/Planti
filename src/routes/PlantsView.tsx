import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';
import { makeRequest } from '../helper';
import { Plant } from '../interfaces';
import { globalStyles } from '../style/globalStyles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    plantsContainer: {
        paddingTop: '2rem',
        paddingBottom: '2rem',
        margin: '0 !important',
        '& h2': {
            fontSize: '1.4rem',
        },
    },
    buttonCard: {
        padding: '2rem',
        height: '20rem',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        '& p': {
            color: '#ffff',
            fontWeight: 700,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    progressContainer: {
        height: '100%',
    },
}));

export default function PlantsView() {
    const classes = useStyles();
    const global = globalStyles();
    const [plants, setPlants] = useState<Plant[]>();

    const fetchPlants = async () => {
        const response = await makeRequest(`/api/plants`, 'GET');
        const savedPlants = await response;
        setPlants(savedPlants);
    };

    useEffect(() => {
        fetchPlants();
    }, []);

    return (
        <div className={classNames(classes.plantsContainer, global.padding)}>
            <div className={classNames(global.maxWidth)}>
                <h2 className={global.textCenter}>Dina Växter</h2>
                <Grid container spacing={3}>
                    <Grid xs={6} sm={4} md={3} item>
                        <Link to='/plants/create' className={global.link}>
                            <div
                                className={classNames(
                                    classes.buttonCard,
                                    global.flexCenter
                                )}
                            >
                                <p className={global.textCenter}>
                                    Lägg till ny växt
                                </p>
                            </div>
                        </Link>
                    </Grid>
                    {plants
                        ? plants.map((plant) => (
                              <Grid xs={6} sm={4} md={3} item key={plant.id}>
                                  <PlantCard plant={plant} />
                              </Grid>
                          ))
                        : [1, 2, 3, 4, 5, 6].map((s) => (
                              <Grid xs={6} sm={4} md={3} item key={s}>
                                  <Skeleton
                                      variant='rect'
                                      height='20rem'
                                      width='100%'
                                  />
                              </Grid>
                          ))}
                </Grid>
            </div>
        </div>
    );
}
