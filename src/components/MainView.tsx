import Hero from "./Hero";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";
import MainPlantsSection from "./MainPlantsSection";
import MainArticleSection from "./MainArticleSection";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "2rem 0",
  },
}));

export default function MainView() {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <>
      <Hero />
      <div className={classes.main}>
        <MainPlantsSection />
        <MainArticleSection />
      </div>
    </>
  );
}
