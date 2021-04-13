import Hero from "./Hero";
import { makeStyles } from "@material-ui/core/styles";
import MainPlantSection from "./MainPlantSection";
import MainArticleSection from "./MainArticleSection";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "2rem 0",
  },
}));

export default function MainView() {
  const classes = useStyles();

  return (
    <>
      <Hero />
      <div className={classes.main}>
        <MainPlantSection />
        <MainArticleSection />
      </div>
    </>
  );
}
