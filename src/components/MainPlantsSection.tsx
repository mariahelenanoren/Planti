import PlantCard from "./PlantCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { plants } from "../plants.json";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  plantsSection: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    overflow: "hidden",
  },
  sectionInner: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  noWrap: {
    flexWrap: "nowrap",
  },
  gridItem: {
    [theme.breakpoints.down("sm")]: {
      height: "19rem",
      width: "16rem",
    },
    height: "22rem",
    width: "18rem",
  },
  buttonCard: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    height: "100%",
    "& p": {
      color: "#ffff",
      fontWeight: 700,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  scrollContainer: {
    overflowY: "hidden",
    overflowX: "auto",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
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

export default function MainPlantsSection() {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div className={classNames(classes.plantsSection, global.padding)}>
      <div
        className={classNames(
          classes.sectionInner,
          global.maxWidth,
          global.flex
        )}
      >
        <h2 className={classNames(classes.headline)}>Dina Växter</h2>
        <Grid
          className={classNames(classes.scrollContainer)}
          container
          spacing={2}
        >
          <Grid item>
            <Grid
              className={classes.noWrap}
              container
              justify="flex-start"
              spacing={3}
            >
              {plants.map((plant) => (
                <Grid className={classes.gridItem} key={plant.id} item>
                  <PlantCard name={plant.name} imageUrl={plant.imageUrl} />
                </Grid>
              ))}
              <Grid className={classes.gridItem} item>
                <div
                  className={classNames(classes.buttonCard, global.flexCenter)}
                >
                  <p className={global.textCenter}>
                    Se alla
                    <br />
                    dina växter
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
