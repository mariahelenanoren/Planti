import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { RouteComponentProps } from "react-router";
import { Article } from "../interfaces";
import { globalStyles } from "../style/globalStyles";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "2rem",
    marginBottom: "2rem",
    margin: "auto",
    maxWidth: "55rem",
  },
  category: {
    fontFamily: "Martel Sans",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
    backgroundColor: "#ffff",
    height: "fit-content",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    "& p": {
      margin: 0,
    },
  },
  articleContainer: {
    backgroundColor: "#ffff",
    "& h2": {
      fontSize: "1.4rem",
    },
    "& img": {
      display: "block",
      width: "100%",
      height: "20rem",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
  textContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    "& h4": {
      marginBottom: 0,
    },
    "& li>p": {
      marginTop: "0.5rem",
    },
  },
  intro: {
    fontStyle: "italic",
  },
}));

interface State {
  article: Article;
}

interface Props extends RouteComponentProps<{}, {}, State> {}

export default function ArticleDetailView(props: Props) {
  const article = props.location.state.article;
  const classes = useStyles();
  const global = globalStyles();

  return (
    <div className={classes.main}>
      <div className={classNames(classes.category, global.padding)}>
        <p>{article.category}</p>
      </div>
      <div className={classes.articleContainer}>
        <img alt={article.title} src={article.imageUrl} />
        <div className={classNames(classes.textContainer, global.padding)}>
          <h2>{article.title}</h2>
          <p className={classes.intro}>{article.intro}</p>
          <div>{ReactHtmlParser(article.body)}</div>
        </div>
      </div>
    </div>
  );
}
