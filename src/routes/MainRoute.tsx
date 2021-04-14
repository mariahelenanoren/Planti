import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainView from "./MainView";
import PlantView from "./PlantView";
import { globalStyles } from "../style/globalStyles";

const useStyles = makeStyles({
  main: {
    marginTop: "5rem",
  },
});

export default function MainRoute() {
  const classes = useStyles();
  const global = globalStyles();
  return (
    <div className={classNames(global.flex1, classes.main)}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/plants/:id" component={PlantView} />
        </Switch>
      </Router>
    </div>
  );
}
