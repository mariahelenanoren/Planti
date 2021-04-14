import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { globalStyles } from "../style/globalStyles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menu: {
    [theme.breakpoints.up("md")]: {
      left: "-100% !important",
    },
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
  isOpen: boolean;
}

export default function MobileMenu(props: Props) {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div
      style={{ left: props.isOpen ? 0 : "-100%" }}
      className={classNames(classes.menu, global.padding)}
    >
      <nav>
        <ul>
          <Link to={"/"} className={global.link}>
            <li>Hem</li>
          </Link>
          <li>Dina växter</li>
          <li>Artiklar</li>
        </ul>
      </nav>
    </div>
  );
}
