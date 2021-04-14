import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import { useState } from "react";

import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainView from "./MainView";
import PlantView from "./PlantView";
import { globalStyles } from "../style/globalStyles";
import EditView from "./EditView";

const useStyles = makeStyles({
  main: {
    marginTop: "5rem",
  },
});

export default function MainRoute() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const classes = useStyles();
  const global = globalStyles();
  return (
    <>
      <Router>
        <MobileNavigation isOpen={menuIsOpen} />
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <div className={classNames(global.flex1, classes.main)}>
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path="/plants/:id" component={PlantView} />
            <Route exact path="/plants/:id/edit" component={EditView} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}
