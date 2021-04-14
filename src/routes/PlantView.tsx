import { makeStyles } from "@material-ui/core";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { makeRequest } from "../helper";
import { Plant } from "../helper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  plantContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  imageContainer: {
    backgroundColor: "#ffff",
    padding: "2rem",
    "& img": {
      width: "100%",
      objectFit: "contain",
    },
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: "2rem",
    "& h2": {
      fontSize: "1.4rem",
      marginTop: 0,
    },
  },
  dataType: {
    fontSize: "0.9rem",
    margin: "0.5rem 0",
    fontFamily: "Martel Sans",
  },
  data: {
    textAlign: "right",
  },
}));

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

export default function PlantView(props: Props) {
  const classes = useStyles();
  const global = globalStyles();
  const id = props.match.params.id;
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await makeRequest(`/api/plants/${id}`, "GET");
      const returnedPlant = await response;
      setPlant(returnedPlant);
    };
    fetchPlant();
  }, [id]);

  return (
    <div className={classNames(global.padding)}>
      <Grid
        container
        spacing={3}
        className={classNames(classes.plantContainer, global.maxWidth)}
      >
        <Grid item xs={12} md={6}>
          <div className={classes.imageContainer}>
            <img alt={plant?.name} src={plant?.imageUrl} />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={classNames(
            global.padding,
            global.flex,
            classes.plantContainer
          )}
        >
          <div className={classNames(classes.descriptionContainer)}>
            <h2 className={global.textCenter}>{plant?.name}</h2>
            <p className={classes.dataType}>Höjd</p>
            <hr />
            <p className={classes.data}>{plant?.height + " cm"}</p>
            <p className={classes.dataType}>Description</p>
            <hr />
            <p className={classes.data}>{plant?.description}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
