import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import React from "react";
import { articles } from "../articles.json";
import { globalStyles } from "../style/globalStyles";
import ArticleCard from "../components/ArticleCard";

const useStyles = makeStyles((theme) => ({
  articlesContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    "& h2": {
      fontSize: "1.4rem",
    },
  },
}));

export default function PlantsView() {
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div className={classNames(classes.articlesContainer, global.padding)}>
      <div className={classNames(global.maxWidth)}>
        <h2 className={global.textCenter}>Artiklar</h2>
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.title}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
