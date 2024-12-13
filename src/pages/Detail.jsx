import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import "../Detail.css";

function Detail() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();

  const artwork = data.find((item) => item.id === parseInt(id));

  if (!artwork) {
    return <p>Artwork not found!</p>;
  }

  const images = data.filter((item) => item.gallery === artwork.gallery);

  const [currentImageIndex, setCurrentImageIndex] = useState(
    images.findIndex((item) => item.id === artwork.id)
  );

  const showPreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="detail">
      <div className="whole-div">
        <div className="desktopWrapper">
          <div className="detail__image-wrapper">
            <img
              className="detail__image"
              src={`.${images[currentImageIndex].images.hero.small}`}
              width={475}
              height={560}
              alt={images[currentImageIndex].name}
            />

            <div className="detail__buttons">
              <button
                className="detail__button"
                type="button"
                onClick={toggleModalVisibility}
              >
                <img
                  src="../../assets/shared/icon-view-image.svg"
                  alt="View image icon"
                />
                VIEW IMAGE
              </button>
            </div>

            <div className="artistLabel">
              <h1 className="detail__title">
                {images[currentImageIndex].name}
              </h1>
              <p className="detail__artist">
                {images[currentImageIndex].artist.name}
              </p>
            </div>

            <img
              src={`.${images[currentImageIndex].artist.image}`}
              alt={images[currentImageIndex].artist.name}
              className="portrait"
              width={200}
              height={200}
            />
          </div>

          <div className="rightContainer">
            <p className="Year">{images[currentImageIndex].year}</p>
            <div className="descripWrapper">
              <p className="detail__description">
                {images[currentImageIndex].description}
              </p>
              <a className="sourceLink" href={images[currentImageIndex].source}>
                GO TO SOURCE
              </a>
            </div>
          </div>
        </div>

        {isModalVisible && (
          <div className="detail__modal" onClick={toggleModalVisibility}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <img
                className="detail__modal-image"
                src={`.${images[currentImageIndex].images.gallery}`}
                alt={images[currentImageIndex].name}
              />
              <button
                className="detail__modal-close"
                type="button"
                onClick={toggleModalVisibility}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <footer>
          <hr />
          <div className="Footer-div">
            <div className="Footer-details">
              <h1>{images[currentImageIndex].name}</h1>
              <p>{images[currentImageIndex].artist.name}</p>
            </div>

            <div className="Footer-buttons">
              <button onClick={showPreviousImage}>
                <img
                  src="../../assets/shared/icon-back-button.svg"
                  alt="Previous"
                />
              </button>
              <button onClick={showNextImage}>
                <img
                  src="../../assets/shared/icon-next-button.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Detail;
