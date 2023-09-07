import axios from "axios";
import "../assets/beers.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [data, setData] = useState([]);

  const getAllBeers = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response data", response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  const beers = data.map((beer) => {
    return (
      <span key={beer._id}>
        <span className="BeerImage">
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} width="100" height="170" alt="" />
          </Link>
        </span>
        <span className="BeerInfo">
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>Created by: {beer.contributed_by}</p>
        </span>
        <hr />
      </span>
    );
  });

  return (
    <div className="BeersPage">
      <div>Beers Page</div>
      {beers}
    </div>
  );
}

export default Beers;
