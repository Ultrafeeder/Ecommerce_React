import * as React from "react";
import Footer from "../component/Footer";
import { useSearchParams } from "react-router-dom";
const commissions = require("../data/commissions.json");
let commission = commissions.commissions;

export default function Commisions() {
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
      {commission
        .filter((comm) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = comm.service_name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((comm) => {
          return (
            <section className="sec-list" key={comm.id}>
            <h2 className="item">{comm.service_name}</h2>
            <img src={comm.img_path} alt="art" />
            <div className="card">
              <article className="desc">
                <h2 className="listprice">All commissions are custom orders and are priced according to request.</h2>
                {comm.service_desc}
              </article>
              <button class="add">Add to cart</button>
            </div>
          </section>
        )})}
      <Footer></Footer>
    </div>
  );
}
