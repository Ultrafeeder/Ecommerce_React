import React from "react";
import Footer from "../component/Footer";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Marketplace() {
  const [print, getPrint] = React.useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  React.useEffect(
    () =>
      axios
        .get("http://localhost:4000/prints")
        .then((response) => {
          getPrint(response.data);
        })
        .catch((err) => console.log(err)),
    []
  );

  if (!print)
    return (
      <div>
        <h1>There seems to have been an error...</h1>
      </div>
    );

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Looking for something?"
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      {print
        .filter((work) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = work.item_name.toLowerCase();
          // let price = work.item_price;
          return name.startsWith(filter.toLowerCase());

          // if (typeof filter == "number") {
          //   // return price(filter);
          // }
        })
        .map((work) => (
          <section className="sec-list" key={work.id}>
            <h2 className="item">Print:{work.item_name}</h2>
            <img src={work.item_path} alt="art" />{" "}
            <div className="card">
              {" "}
              <article className="desc">
                <h2 className="listprice">List Price:{work.item_price}</h2>
                {work.item_description}{" "}
              </article>
              <button className="add">Add to cart</button>{" "}
            </div>{" "}
          </section>
        ))}
    </div>
  );
}
