import * as React from "react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const print = require("../data/prints.json");

let prints = print.prints;
// console.log(print.prints);

export default function Marketplace() {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <input
        type="text"
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
      {prints
        .filter((work) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = work.item_name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((work) => {
          return (
            <section className="sec-list" key={work.id}>
              <h2 className="item">Print:{work.item_name}</h2>
              <img src={work.item_path} alt="art" />
              <div className="card">
                <article className="desc">
                  <h2 className="listprice">List Price:{work.item_price}</h2>
                  {work.item_description}
                </article>
                <button class="add">Add to cart</button>
              </div>
            </section>
          );
        })}
      <Footer></Footer>
    </div>
  );
}
