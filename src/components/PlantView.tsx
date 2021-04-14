import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { makeRequest } from "../helper";
import { Plant } from "../helper";

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

export default function PlantView(props: Props) {
  const id = props.match.params.id;
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await makeRequest(`/api/plants/${id}`, "GET");
      const returnedPlant = await response;
      setPlant(returnedPlant);
    };
    fetchPlant();
  }, [id]);

  return (
    <>
      <p>{plant?.name}</p>
    </>
  );
}
