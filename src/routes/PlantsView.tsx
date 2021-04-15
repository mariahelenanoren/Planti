import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import { makeRequest, Plant } from "../helper";
import { globalStyles } from "../style/globalStyles";

const useStyles = makeStyles((theme) => ({
  plantsContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    "& h2": {
      fontSize: "1.4rem",
    },
  },
  cardContainer: {
    height: "100%",
    width: "100%",
  },
  buttonCard: {
    padding: "2rem",
    minHeight: "10rem",
    backgroundColor: theme.palette.primary.main,
    "& p": {
      color: "#ffff",
      fontWeight: 700,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function PlantsView() {
  const classes = useStyles();
  const global = globalStyles();
  const [plants, setPlants] = useState<Plant[]>();

  const fetchPlants = async () => {
    const response = await makeRequest(`/api/plants`, "GET");
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
          <Grid item xs={6} sm={4} md={3}>
            <div
              className={classNames(
                classes.buttonCard,
                classes.cardContainer,
                global.flexCenter
              )}
            >
              <Link to="/plants/create" className={global.link}>
                <p className={global.textCenter}>Lägg till ny växt</p>
              </Link>
            </div>
          </Grid>
          {plants?.map((plant) => (
            <Grid item xs={6} sm={4} md={3} key={plant.id}>
              <div className={classes.cardContainer}>
                <PlantCard plant={plant} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
