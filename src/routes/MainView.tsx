import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { globalStyles } from "../style/globalStyles";

const useStyles = makeStyles({
  main: {
    marginTop: "5rem",
  },
});

export default function MainView() {
  const classes = useStyles();
  const global = globalStyles();
  return (
    <div className={classNames(global.flex1, classes.main)}>
      <Router>
        <Switch></Switch>
      </Router>
    </div>
  );
}
