import ArticleCard from "./ArticleCard";
import { Grid, makeStyles } from "@material-ui/core";
import { articles } from "../articles.json";
import { globalStyles } from "../style/globalStyles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  articleSection: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
}));

export default function MainArticleSection() {
  const classes = useStyles();
  const global = globalStyles();
  return (
    <div className={classNames(classes.articleSection, global.padding)}>
      <div className={global.maxWidth}>
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
