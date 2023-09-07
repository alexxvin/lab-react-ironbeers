import "./App.css";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BeerDetails from "./components/BeerDetails";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      "Iron Beers"
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/random" element={<RandomBeer />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/beers/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
