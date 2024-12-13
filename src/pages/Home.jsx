import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import "../Home.css";


function Home() {
  console.log(data);

  return (
    <div>

      <div className="Galleria-div">
        {data.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <div className="Gallery-item">
              <img
                src={`.${item.images.thumbnail}`}
                alt={item.artist.name}
                className="Gallery-img"
              />
              <div className="Gallery-text">
                <h2>{item.name}</h2>
                <p>{item.artist.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
