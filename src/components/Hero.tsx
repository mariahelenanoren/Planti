import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { globalStyles } from "../style/globalStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    height: "auto",
    "& li": {
      padding: "0 !important",
    },
  },
  heroBox: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  quoteContainer: {
    position: "relative",
    height: "100%",
    flexDirection: "column",
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
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        <GridListTile cols={2}>
          <img src="../../assets/hero.png" alt="hero" />
        </GridListTile>
        <GridListTile cols={1} className={classes.heroBox}>
          <div
            className={classNames(
              classes.quoteContainer,
              global.padding,
              global.flexCenter
            )}
          >
            <p className={classNames(classes.author, global.textCenter)}>
              Planti
            </p>
            <p className={classNames(classes.quote, global.textCenter)}>
              Alla dina växter<br></br>sparade på ett och<br></br>samma ställe
            </p>
          </div>
        </GridListTile>
      </GridList>
    </div>
  );
}
