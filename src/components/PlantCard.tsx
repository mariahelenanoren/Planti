import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%",
    padding: "1rem",
    backgroundColor: "#ffff",
    "& img": {
      height: "80%",
      width: "100%",
      objectFit: "contain",
    },
    "& h3": {
      marginTop: "0.5rem",
    },
  },
});

interface Props {
  name: string;
  imageUrl: string;
}

export default function PlantCard(props: Props) {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div className={classes.card}>
      <img alt={props.name} src={props.imageUrl} />
      <h3 className={global.textCenter}>{props.name}</h3>
    </div>
  );
}
