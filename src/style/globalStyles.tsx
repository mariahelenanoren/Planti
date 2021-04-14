import { makeStyles } from "@material-ui/core/styles";

export const globalStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
  },
  flex1: {
    flex: 1,
  },
  maxWidth: {
    maxWidth: "100rem",
    margin: "auto !important",
  },
  padding: {
    [theme.breakpoints.down("sm")]: {
      paddingRight: "3rem",
      paddingLeft: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
    paddingRight: "5rem",
    paddingLeft: "5rem",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));
