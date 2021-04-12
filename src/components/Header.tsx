import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    width: "100%",
    height: "5rem",
    backgroundColor: "#ffff",
    zIndex: 100,
  },
  headerInner: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "& h1": {
      fontSize: "1.4rem",
    },
    "& p": {
      padding: "0 3rem",
      borderLeft: `1px ${theme.palette.text.secondary} solid`,
      "&:last-of-type": {
        paddingRight: "0",
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div className={classes.header}>
      <div
        className={classNames(
          classes.headerInner,
          global.flex,
          global.maxWidth,
          global.padding
        )}
      >
        <h1>Planti</h1>
        <div className={global.flex}>
          <p>Hem</p>
          <p>Dina växter</p>
          <p>Artiklar</p>
        </div>
      </div>
    </div>
  );
}
