import React from "react";
import Rating from "@material-ui/lab/Rating";

const Item = (props) => {
  return (
    <div className="item">
      <h4>{props.book.title}</h4>
      <h5>-{props.book.authors}</h5>
      <Rating
        value={props.book.average_rating}
        precision={0.5}
        size="small"
        name="rating"
        readOnly={true}
      />
      <p>ISBN: {props.book.isbn}</p>
      <p>Language: {props.book.language_code}</p>
      <p>Rated by: {props.book.ratings_count}</p>
      <p>Rs. {props.book.price}</p>
      <button
        type="button"
        onClick={() => {
          props.addInCart(props.book.bookID);
        }}
      >
        Add in Cart
      </button>
    </div>
  );
};

export default Item;
