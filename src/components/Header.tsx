import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import { Menu } from "@material-ui/icons";
import classNames from "classnames";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createRef, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    width: "100%",
    backgroundColor: "#ffff",
    height: "5rem",
    zIndex: 100,
    transition: "top 0.25s ease",
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
  const [headerState, setHeaderState] = useState({
    prevScrollPos: window.pageYOffset,
    visible: true,
  });
  const heightRef = createRef<HTMLDivElement>();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(heightRef.current?.offsetHeight || 0);
  }, [heightRef]);

  useEffect(function addEventListenerToWindow() {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      const visible =
        props.menuIsOpen === true ||
        headerState.prevScrollPos >= currentScrollPos ||
        currentScrollPos <= headerHeight;

      setHeaderState({
        prevScrollPos: window.pageYOffset,
        visible,
      });
    }
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      ref={heightRef}
      className={classNames(classes.header, global.padding)}
      style={{ top: headerState.visible ? 0 : "-5rem" }}
    >
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
            <Link to={"/plants"} className={global.link}>
              <p>Dina växter</p>
            </Link>
            <Link to={"/articles"} className={global.link}>
              <p>Artiklar</p>
            </Link>
          </Hidden>
        </div>
      </div>
    </div>
  );
}
