import { makeStyles } from "@material-ui/core/styles";
import { globalStyles } from "../style/globalStyles";
import { FormEvent, useState } from "react";
import { makeRequest, Plant } from "../helper";
import classNames from "classnames";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  formContainer: {
    flexDirection: "column",
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await makeRequest(`/api/plants`, "POST", plant);
    const status = await response;
    console.log(status);
    if (status) {
      window.location.assign(`/plants/${status.id}`);
    }
  };

  return (
    <div className={classNames(global.padding, classes.main)}>
      <div
        className={classNames(
          global.flex,
          classes.formContainer,
          global.maxWidth
        )}
      >
        <h2 className={global.textCenter}>Lägg till växt</h2>
        <form className={global.flex} onSubmit={(e) => handleSubmit(e)}>
          <TextField
            value={plant.name}
            label="Namn"
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            value={plant.imageUrl}
            label="Bild-url"
            onChange={(e) => handleChange("imageUrl", e.target.value)}
          />
          <TextField
            value={Number(plant.height) || ""}
            type="number"
            label="Höjd (cm)"
            onChange={(e) => handleChange("height", String(e.target.value))}
          />
          <TextField
            value={plant.description}
            label="Beskrivning"
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Spara växt
          </Button>
        </form>
      </div>
    </div>
  );
}
