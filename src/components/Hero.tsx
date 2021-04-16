import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { globalStyles } from "../style/globalStyles";
import hero from "../assets/hero.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heroImage: {
    width: "100%",
    height: "22rem",
    objectFit: "cover",
  },
  quoteContainer: {
    position: "absolute",
    right: 0,
    backgroundColor: theme.palette.primary.main,
    width: "26rem",
    maxWidth: "100%",
    height: "22rem",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "100%",
      height: "15rem",
    },
  },
  author: {
    position: "absolute",
    top: "calc(50% - 5.5rem)",
    fontSize: "0.9rem",
    margin: "0 0 0.5rem 0",
    color: theme.palette.secondary.main,
  },
  quote: {
    margin: "0.5rem 0 0 0",
    fontSize: "1.4rem",
    color: "#ffff",
  },
}));

export default function Hero() {
  const classes = useStyles();
  const global = globalStyles();
  return (
    <div className={classNames(classes.root, global.maxWidth)}>
      <img className={classes.heroImage} src={hero} alt="hero" />
      <div
        className={classNames(
          classes.quoteContainer,
          global.padding,
          global.flexCenter
        )}
      >
        <p className={classNames(classes.author, global.textCenter)}>Planti</p>
        <p className={classNames(classes.quote, global.textCenter)}>
          Alla dina växter
          <br />
          sparade på ett och
          <br />
          samma ställe
        </p>
      </div>
    </div>
  );
}
