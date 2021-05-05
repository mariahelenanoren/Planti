import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import React, { FormEvent, useEffect, useState } from "react";
import { makeRequest } from "../helper";
import { Plant } from "../interfaces";
import classNames from "classnames";
import { Button, Grid, Hidden, TextField } from "@material-ui/core";
import defaultImage from "../assets/defaultImage.jpg";

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

export default function MainView() {
  const classes = useStyles();
  const global = globalStyles();
  const [imageSource, setImageSource] = useState(defaultImage);
  const [plant, setPlant] = useState<Plant>({
    name: "",
    height: "",
    imageUrl: "",
    description: "",
    id: 0,
  });

  const handleChange = (key: string, value: string) => {
    console.log(key, value);
    setPlant((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  /* useEffect(() => {
    const fetchPlants = async () => {
      const response = await makeRequest("/api/plants/", "GET");
      const plants = await response;

      if (plants) {
        const id = plants[plants.length - 1].id + 1;
        setPlant((prevState) => ({
          ...prevState,
          id: id,
        }));
      }
    };
    fetchPlants();
  }, []); */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await makeRequest("/api/plants/", "POST", plant);
    const status = await response;
    console.log(status);
    if (status) {
      window.location.assign(`/plants/${status.id}`);
    }
  };

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
              <h2 className={global.textCenter}>Skapa ny växt</h2>
              <form className={global.flex} onSubmit={(e) => handleSubmit(e)}>
                <TextField
                  required
                  value={plant.name}
                  label="Namn"
                  onChange={(e) => handleChange("name", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  value={plant.imageUrl}
                  label="Bild-url"
                  onChange={(e) => {
                    handleChange("imageUrl", e.target.value);
                    setImageSource(e.target.value);
                  }}
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
                  Spara växt
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
                <img
                  onError={(e) => {
                    setImageSource(defaultImage);
                    console.log(e);
                  }}
                  alt={plant?.name}
                  src={imageSource}
                />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}
