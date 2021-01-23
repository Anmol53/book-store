import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./Components/Item";
import Pagination from "@material-ui/lab/Pagination";
import { books } from "./data.js";

function App() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [currPageBooks, setCurrPageBooks] = useState([]);
  const [orderdBooks, setOrderedBooks] = useState([]);
  const itemPerPage = 24;

  useEffect(() => {
    const temp = [];
    const pageFrom = (page - 1) * itemPerPage;
    const pageTo = Math.min(pageFrom + itemPerPage, books.length);
    for (let i = pageFrom; i < pageTo; i++) {
      temp.push(books[i]);
    }
    setCurrPageBooks(temp);
  }, [page]);

  const compare = (a, b, sB) => {
    console.log(a, b);
    switch (sB) {
      case "bookID":
        return a.bookID - b.bookID;
      case "title":
        return a.title - b.title;
      case "author":
        return a.author - b.author;
      case "rating":
        return a.rating - b.rating;
      case "price":
        return a.price - b.price;
      default:
        return 0;
    }
  };

  // useEffect(() => {
  //   const [sB, dir] = sortBy.split("_");
  //   setOrderedBooks(
  //     books.sort((a, b) => {
  //       const c = compare(a, b, sB);
  //       if (dir === "A") {
  //         return c;
  //       }
  //       return -c;
  //     })
  //   );
  //   // console.log(sortBy, s, dir);
  // }, [sortBy]);

  const addInCart = (i) => {};

  return (
    <div className="App">
      <h1 className="brand-head">Book Store</h1>
      <div className="main-control">
        <div className="search-control">
          <h4>Search</h4>
          <input type="text" />
        </div>
        <div
          className="sort-control"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <h4>Sort by</h4>
          <input type="radio" id="bookID_A" name="sort" value="bookID_A" />
          <label for="bookID_A">Book ID ↓</label>
          <br />
          <input type="radio" id="bookID_D" name="sort" value="bookID_D" />
          <label for="bookID_D">Book ID ↑</label>
          <br />
          <input type="radio" id="title_A" name="sort" value="title_A" />
          <label for="title_A">Title ↓</label>
          <br />
          <input type="radio" id="title_D" name="sort" value="title_D" />
          <label for="title_D">Title ↑</label>
          <br />
          <input type="radio" id="author_A" name="sort" value="author_A" />
          <label for="author_A">Author ↓</label>
          <br />
          <input type="radio" id="author_D" name="sort" value="author_D" />
          <label for="author_D">Author ↑</label>
          <br />
          <input type="radio" id="rating_A" name="sort" value="rating_A" />
          <label for="rating_A">Rating ↓</label>
          <br />
          <input type="radio" id="rating_D" name="sort" value="rating_D" />
          <label for="rating_D">Rating ↑</label>
          <br />
          <input type="radio" id="ratingC_A" name="sort" value="ratingC_A" />
          <label for="ratingC_A">Rating Count ↓</label>
          <br />
          <input type="radio" id="ratingC_D" name="sort" value="ratingC_D" />
          <label for="ratingC_D">Rating Count ↑</label>
          <br />
          <input type="radio" id="price_A" name="sort" value="price_A" />
          <label for="price_A">Price ↓</label>
          <br />
          <input type="radio" id="price_D" name="sort" value="price_D" />
          <label for="price_D">Price ↑</label>
          <br />
        </div>
      </div>
      <div className="main-container">
        <div className="item-container">
          {currPageBooks.map((book, idx) => (
            <Item key={idx} book={book} addInCart={addInCart} />
          ))}
        </div>
        <div className="pagination">
          <Pagination
            // count={parseInt((books.length + itemPerPage) / itemPerPage)}
            count={1568}
            page={page}
            onChange={(e, v) => setPage(v)}
            variant="outlined"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
