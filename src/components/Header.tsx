import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import { Menu } from "@material-ui/icons";
import classNames from "classnames";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    width: "100%",
    backgroundColor: "#ffff",
    height: "5rem",
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
    "& a": {
      "&:last-of-type": {
        paddingRight: "0",
      },
    },
    "& p": {
      padding: "0 3rem",
      borderLeft: `1px ${theme.palette.text.secondary} solid`,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  menuIcon: {
    fontSize: "2rem",
  },
}));

interface Props {
  setMenuIsOpen: (isOpen: React.SetStateAction<boolean>) => void;
  menuIsOpen: boolean;
}

export default function Header(props: Props) {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div className={classNames(classes.header, global.padding)}>
      <div
        className={classNames(
          classes.headerInner,
          global.flex,
          global.maxWidth
        )}
      >
        <Link to={"/"} className={global.link}>
          <h1>Planti</h1>
        </Link>
        <div className={global.flex}>
          <Hidden mdUp>
            <Menu
              className={classes.menuIcon}
              onClick={() => props.setMenuIsOpen(!props.menuIsOpen)}
            />
          </Hidden>
          <Hidden smDown>
            <Link to={"/"} className={global.link}>
              <p>Hem</p>
            </Link>
            <p>Dina växter</p>
            <p>Artiklar</p>
          </Hidden>
        </div>
      </div>
    </div>
  );
}
