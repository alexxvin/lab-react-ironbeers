import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <Link to="/beers/random">Get Random Beer</Link>
      </div>
      <div>
        <Link to="/beers/new">Add New Beer</Link>
      </div>
    </div>
  );
}

export default HomePage;
