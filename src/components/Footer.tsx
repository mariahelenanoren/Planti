import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    padding: "2rem 0",
    backgroundColor: "#ffff",
    zIndex: 100,
  },
  footerInner: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    "& h2": {
      margin: 0,
      color: theme.palette.text.secondary,
      fontSize: "1.4rem",
    },
    "& hr": {
      width: "100%",
      border: "none",
      borderTop: `1px ${theme.palette.text.secondary} solid`,
    },
  },
  itemContainer: {
    textAlign: "right",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div className={classes.footer}>
      <div
        className={classNames(
          classes.footerInner,
          global.flex,
          global.maxWidth,
          global.padding
        )}
      >
        <h2>Planti</h2>
        <hr />

        <div className={classNames(classes.itemContainer)}>
          <p>Hem</p>
          <p>Dina växter</p>
          <p>Artiklar</p>
        </div>
      </div>
    </div>
  );
}
