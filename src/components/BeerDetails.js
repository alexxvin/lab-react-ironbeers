import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetails() {
  const [beer, setBeer] = useState("");
  const { beerId } = useParams();
  console.log(beerId);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
        console.log("Beer item", beer);
        console.log(response, "response");
        console.log("Response DATA", response.data);
      });
  }, []);
  return (
    <div>
      <div>
        <img
          style={{ marginLeft: 50 }}
          width="100"
          height="200"
          src={beer.image_url}
          alt=""
        />
        <div>
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
        </div>
        <div>
          <div>
            <h3>First Brewed: {beer.first_brewed}</h3>
          </div>
          <div>
            {" "}
            <h4>Attenuation Level: {beer.attenuation_level}</h4>
          </div>
          <div>
            <p>
              <b>Description:</b> {beer.description}
            </p>
            <p>
              <b>Contributed by: </b> {beer.contributed_by}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BeerDetails;
