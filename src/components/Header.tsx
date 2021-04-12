import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    width: "100%",
    height: "5rem",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5rem",
    backgroundColor: "#ffff",
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
    <div className={classNames(classes.header, global.flex)}>
      <h1>Planti</h1>
      <div className={global.flex}>
        <p>Hem</p>
        <p>Dina växter</p>
        <p>Artiklar</p>
      </div>
    </div>
  );
}
