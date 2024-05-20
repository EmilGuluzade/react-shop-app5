import React, { useContext, useState } from "react";
import "./Cards.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";
const Cards = () => {
  const [inpVal, setInpVal] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const { data, addToBasket } = useContext(MainContext);
  return (
    <div className="cardsection">
      <div className="container">
        <input
          value={inpVal}
          onChange={(e) => {
            setInpVal(e.target.value);
          }}
          type="text"
          placeholder="Search "
        />
        <button
          onClick={() => setSortBy({ field: "title", asc: true })}
          className="btn btn-secondary mx-3  "
        >
          A-Z
        </button>
        <button
          onClick={() => setSortBy({ field: "title", asc: false })}
          className="btn btn-secondary mx-3 "
        >
          Z-A
        </button>
        <button
          onClick={() => setSortBy({ field: "price", asc: false })}
          className="btn btn-secondary "
        >
          Low To High
        </button>
        <button
          onClick={() => setSortBy({ field: "price", asc: true })}
          className="btn btn-secondary mx-3 "
        >
          High To Low
        </button>
        <div className="cardss mt-5 ">
          {data
            .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc == true) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
            .map((item, index) => (
              <div className="cardd">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <p>{item.category}</p>
                <p className=" d-flex justify-content-between ">
                  <Link to={`/detail/${item._id}`}>
                    LEARN MORE <i class="fa-solid fa-arrow-right"></i>
                  </Link>{" "}
                  <button
                    onClick={() => addToBasket(item._id)}
                    className="btn btn-success "
                  >
                    Add
                  </button>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
