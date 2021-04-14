import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import { globalStyles } from "../style/globalStyles";
import { useState } from "react";
import MobileNavigation from "../components/MobileNavigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainView from "./MainView";
import PlantView from "./PlantView";
import EditView from "./EditView";
import CreateView from "./CreateView";

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
            <Route exact path="/plants/create" component={CreateView} />
            <Route exact path="/plants/:id" component={PlantView} />
            <Route path="/plants/:id/edit" component={EditView} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}
