import React from "react";
import CharacterItem from "../characters/CharacterItem";

const ChacarterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "0",
          paddingBottom: "100%",
          position: "relative",
        }}
      >
        <iframe
          title="spinner"
          src="https://giphy.com/embed/uedDcC6rK8Afe"
          width="480px"
          height="425px"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/deal-with-it-heisenberg-breaking-bad-uedDcC6rK8Afe">
          via GIPHY
        </a>
      </p>
    </>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default ChacarterGrid;
