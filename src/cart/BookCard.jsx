import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "5px", textAlign: "center" }}>
      <img src={image} alt={name} style={{ width: "150px", height: "200px" }} />
      <h2>{name}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default BookCard;
