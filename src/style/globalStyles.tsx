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
    [theme.breakpoints.down("xs")]: {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "3rem",
      paddingLeft: "3rem",
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
}));
