import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState("");
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
        console.log("Random Beer", response);
      });
  }, []);
  return (
    <div>
      <span width="30%">
        <img
          style={{ marginLeft: 100 }}
          width="250"
          height="900"
          src={randomBeer.image_url}
          alt=""
        />
      </span>
      <span style={{ float: "right" }}>
        {" "}
        <h1>{randomBeer.name}</h1>
      </span>
      <h4>{randomBeer.tagline}</h4>
      <h5>First brewed: {randomBeer.first_brewed}</h5>
      <h4>Attenuation Level: {randomBeer.attenuation_level}</h4>
      <p>{randomBeer.description}</p>
      <h3>{randomBeer.contributed_by}</h3>
    </div>
  );
}

export default RandomBeer;
