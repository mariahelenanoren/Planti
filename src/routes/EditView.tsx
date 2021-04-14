import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { globalStyles } from "../style/globalStyles";
import { RouteComponentProps } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { makeRequest, Plant } from "../helper";
import classNames from "classnames";
import { Button, Hidden, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: "2rem",
    "& img": {
      width: "100%",
      objectFit: "contain",
    },
  },
  descriptionContainer: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#ffff",
    padding: "2rem",
    "& h2": {
      fontSize: "1.4rem",
      marginTop: 0,
    },
    "& form": {
      flexDirection: "column",
      "& .MuiInput-root": {
        marginBottom: "1rem",
      },
      "& button": {
        marginTop: "1rem",
      },
    },
  },
}));

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

export default function MainView(props: Props) {
  const classes = useStyles();
  const global = globalStyles();
  const id = props.match.params.id;
  const [plant, setPlant] = useState<Plant>({
    name: "",
    height: "",
    imageUrl: "",
    description: "",
    id: 0,
  });

  const handleChange = (key: string, value: string) => {
    setPlant((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await makeRequest(`/api/plants`, "PUT", plant);
    const status = await response;
    if (status) {
      window.location.assign(`/plants/${id}`);
    }
  };

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await makeRequest(`/api/plants/${id}`, "GET");
      const returnedPlant = await response;
      setPlant(returnedPlant);
    };
    fetchPlant();
  }, [id]);

  return (
    <div className={classNames(global.padding, classes.main)}>
      <div className={classNames(global.maxWidth)}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={9}
            className={classNames(global.padding, global.flex)}
          >
            <div
              className={classNames(global.flex, classes.descriptionContainer)}
            >
              <h2 className={global.textCenter}>Ändra {plant?.name}</h2>
              <form className={global.flex} onSubmit={(e) => handleSubmit(e)}>
                <TextField
                  value={plant.name}
                  label="Namn"
                  onChange={(e) => handleChange("name", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  value={plant.imageUrl}
                  label="Bild-url"
                  onChange={(e) => handleChange("imageURL", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  value={Number(plant.height) || ""}
                  type="number"
                  label="Höjd (cm)"
                  onChange={(e) =>
                    handleChange("height", String(e.target.value))
                  }
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  value={plant.description}
                  label="Beskrivning"
                  onChange={(e) => handleChange("description", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Spara ändringar
                </Button>
              </form>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={3} className={global.flex}>
              <div
                className={classNames(
                  classes.imageContainer,
                  global.flexCenter
                )}
              >
                <img alt={plant?.name} src={plant?.imageUrl} />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}
