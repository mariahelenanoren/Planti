import { makeStyles } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import classNames from "classnames";
import { globalStyles } from "../style/globalStyles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    backgroundColor: "#ffff",
  },
  cardInner: {
    padding: "1.5rem",
    "& hr": {
      border: "none",
      borderTop: `1px ${theme.palette.text.secondary} solid`,
    },
  },
  image: {
    display: "block",
    width: "100%",
    height: "15rem",
    objectFit: "cover",
    objectPosition: "center",
  },
  category: {
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
    "& p": {
      fontFamily: "Martel Sans",
      margin: 0,
      fontSize: "0.9rem",
      textTransform: "uppercase",
    },
  },
}));

interface Props {
  article: Article;
}

interface Article {
  title: string;
  imageUrl: string;
  category: string;
  description: string;
  intro: string;
  body: string;
}

export default function ArticleCard(props: Props) {
  const global = globalStyles();
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        alt={props.article.title}
        src={props.article.imageUrl}
      />
      <div className={classes.cardInner}>
        <div className={classNames(global.flex, classes.category)}>
          <p>{props.article.category}</p>
          <ArrowForward />
        </div>
        <hr />
        <h3>{props.article.title}</h3>
        <p>{props.article.description}</p>
      </div>
    </div>
  );
}
