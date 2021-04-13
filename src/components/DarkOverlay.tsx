import { makeStyles } from "@material-ui/core";

interface Props {
  menuIsOpen: boolean;
}

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    transition: "opacity 0.5s ease",
    zIndex: 10,
  },
});

export default function DarkOverlay(props: Props) {
  const classes = useStyles();
  return (
    <div
      className={classes.overlay}
      style={{
        display: props.menuIsOpen ? "block" : "none",
        opacity: props.menuIsOpen ? 100 : 0,
      }}
    ></div>
  );
}
