import { useParams } from "react-router-dom";

export default function MoviePage() {
  const route_parameters = useParams();
  console.log(route_parameters);
  return (
    <div>
      <p>Some specific movie here</p>
      <p>{JSON.stringify(route_parameters)}</p>
    </div>
  );
}
