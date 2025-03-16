import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Popular.css";

const Popular = () => {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    // Fetch museum data (replace with your API call)
    axios
      .get("/api/museums")
      .then((response) => setMuseums(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="popular">
      <h1>Popular Museums</h1>
      <div className="museum-list">
        {museums.map((museum) => (
          <div key={museum._id} className="museum-card">
            <img src={museum.imageUrl} alt={museum.name} />
            <h3>{museum.name}</h3>
            <p>{museum.description}</p>
            <Link to={`/museum/${museum._id}`} className="btn">
              Book Tickets
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
