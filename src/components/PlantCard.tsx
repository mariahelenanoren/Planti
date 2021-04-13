import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#ffff",
    "& img": {
      objectFit: "contain",
      height: "16rem",
    },
    "& h3": {
      margin: "0.5rem 0",
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
