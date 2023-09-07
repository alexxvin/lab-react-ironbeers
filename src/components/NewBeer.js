import { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [level, setLevel] = useState("");
  const [contributed, setContributed] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleBrewedChange = (e) => {
    setFirstBrewed(e.target.value);
  };

  const handleTipsChange = (e) => {
    setTips(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleContributedChange = (e) => {
    setContributed(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: tips,
      attenuation_level: level,
      contributed_by: contributed,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log("POST RESPONSE", response);
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setTips("");
        setLevel("");
        setContributed("");
      });
  };
  return (
    <div className="NewBeerPage">
      <form onSubmit={handleSubmit}>
        <label>
          <b>Name</b>
        </label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Tagline</label>
        <input type="text" value={tagline} onChange={handleTaglineChange} />

        <label>Description</label>
        <textarea
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <label>First Brewed</label>
        <input type="text" value={firstBrewed} onChange={handleBrewedChange} />
        <label>Brewers Tips</label>
        <input type="text" value={tips} onChange={handleTipsChange} />

        <label>Attenuation Level</label>
        <input type="number" value={level} onChange={handleLevelChange} />

        <label>Contributed by</label>
        <input
          type="text"
          value={contributed}
          onChange={handleContributedChange}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default NewBeer;
