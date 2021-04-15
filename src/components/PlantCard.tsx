import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { globalStyles } from "../style/globalStyles";
import { Plant } from "../helper";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#ffff",
    "& img": {
      [theme.breakpoints.down("xs")]: {
        height: "10rem",
      },
      width: "100%",
      height: "14rem",
      objectFit: "contain",
    },
    "& h3": {
      margin: "0.5rem 0 0 0",
    },
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
}));

interface Props {
  plant: Plant;
}

export default function PlantCard(props: Props) {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <Link to={`/plants/${props.plant.id}`} className={global.link}>
      <div className={classes.card}>
        <div className={classes.imageContainer}>
          <img alt={props.plant.name} src={props.plant.imageUrl} />
        </div>
        <h3 className={global.textCenter}>{props.plant.name}</h3>
      </div>
    </Link>
  );
}
