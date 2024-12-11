import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function Detail() {
  const [isClicked, setIsClicked] = useState(false);
  const { id } = useParams();

  // Find the artwork by ID
  const artwork = data.find((item) => item.id === parseInt(id));

  if (!artwork) {
    return <p>Artwork not found!</p>;
  }

  return (
    <div>
      <p>{artwork.artist.name}</p>
      <p>{artwork.name}</p>
      <p>{artwork.description}</p>

      {/* Thumbnail */}
      <img
        src={`.${artwork.images.thumbnail}`}
        width={200}
        height={200}
        alt="Thumbnail"
        onClick={() => setIsClicked(true)} // Open large hero image
      />

      {/* Render Hero Large image if clicked */}
      {isClicked && (
        <div>
          <img
            src={`.${artwork.images.hero.large}`}
            width={400}
            height={400}
            alt="Hero Large"
          />
          <button onClick={() => setIsClicked(false)}>Close</button>
        </div>
      )}

      {/* Other Images */}
      <img
        src={`.${artwork.images.hero.small}`}
        width={200}
        height={200}
        alt="Hero Small"
      />
      <img
        src={`.${artwork.images.gallery}`}
        width={200}
        height={200}
        alt="Gallery"
      />
      <img
        src={`.${artwork.artist.image}`}
        alt={artwork.artist.name}
        width={200}
        height={200}
      />
    </div>
  );
}

export default Detail;
