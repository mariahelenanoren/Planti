import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { globalStyles } from "../style/globalStyles";
import { Link } from "react-router-dom";
import { theme } from "../style/theme";

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "70%",
    height: "calc(100% - 5rem)",
    maxWidth: "20rem",
    left: 0,
    bottom: 0,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    backgroundColor: "#ffff",
    position: "fixed",
    zIndex: 50,
    transition: "left 0.5s ease",
    "& ul": {
      padding: 0,
      margin: 0,
      listStyle: "none",
      "& li": {
        marginBottom: "1.5rem",
        padding: "0 1rem",
        borderLeft: `1px ${theme.palette.text.secondary} solid`,
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
}));

interface Props {
  setMenuIsOpen: (isOpen: React.SetStateAction<boolean>) => void;
  menuIsOpen: boolean;
}

export default function MobileMenu(props: Props) {
  const classes = useStyles();
  const global = globalStyles();

  useEffect(() => {
    function checkWindowWidth() {
      window.innerWidth > theme.breakpoints.values.md
        ? props.setMenuIsOpen(false)
        : props.setMenuIsOpen(props.menuIsOpen);
    }

    window.addEventListener("resize", checkWindowWidth);

    return function cleanup() {
      window.removeEventListener("resize", checkWindowWidth);
    };
  });

  const handleClick = () => {
    props.setMenuIsOpen(!props.menuIsOpen);
  };

  return (
    <div
      style={{ left: props.menuIsOpen ? 0 : "-100%" }}
      className={classNames(classes.menu, global.padding)}
    >
      <nav>
        <ul>
          <Link to={"/"} className={global.link} onClick={handleClick}>
            <li>Hem</li>
          </Link>
          <Link to={"/plants"} className={global.link} onClick={handleClick}>
            <li>Dina växter</li>
          </Link>
          <li>Artiklar</li>
        </ul>
      </nav>
    </div>
  );
}
