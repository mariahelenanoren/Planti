import PlantCard from "./PlantCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { plants } from "../plants.json";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  plantSection: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  sectionInner: {
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  scrollContainer: {
    overflowY: "hidden",
    overflowX: "auto",
    flexWrap: "nowrap",
    maxWidth: "100%",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  cardContainer: {
    height: "100%",
    width: "14rem",
  },
  buttonCard: {
    backgroundColor: theme.palette.secondary.main,
    "& p": {
      color: "#ffff",
      fontWeight: 700,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  headline: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
    paddingRight: "3rem",
    margin: 0,
    fontSize: "1.2rem",
    whiteSpace: "nowrap",
  },
}));

export default function MainPlantSection() {
  const classes = useStyles();
  const global = globalStyles();

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
          container
          className={classNames(global.flex, classes.scrollContainer)}
          spacing={3}
        >
          {plants.map((plant) => (
            <Grid key={plant.id} item>
              <div className={classes.cardContainer}>
                <PlantCard name={plant.name} imageUrl={plant.imageUrl} />
              </div>
            </Grid>
          ))}
          <Grid item>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
