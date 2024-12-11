import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

function Home() {
  console.log(data);

  return (
    <div>
      <h1>Home</h1>

      <ul>
        {data.map((item) => (
          <Link to={`/detail/${item.id}`}>
            <li key={item.id}>
              <div>
                <img
                  src={`.${item.images.thumbnail}`}
                  alt={item.artist.name}
                  width={200}
                  height={200}
                />
                <h2>{item.name}</h2>
                <p>{item.artist.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
