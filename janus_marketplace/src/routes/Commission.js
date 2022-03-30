import * as React from "react";
// import axios from "axios";
import { useSearchParams } from "react-router-dom";
import commission from "../data/commissions.json"

export default function Commisions() {
  // let [commission, getCommission] = React.useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  // React.useEffect(
  //   () =>
  //     axios
  //       .get("http://localhost:4000/commissions")
  //       .then((response) => {
  //         getCommission(response.data);
  //       })
  //       .catch((err) => console.log(err)),
  //   []
  // );

  // if (!commission)
  //   return (
  //     <div>
  //       <h1>There seems to have been an error...</h1>
  //     </div>
  //   );

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Enter a name of a piece you're looking for."
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
      {commission.commissions
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
                  <h2 className="listprice">
                    All commissions are custom orders and are priced according
                    to request.
                  </h2>
                  {comm.service_desc}
                </article>
                <button class="add">Add to cart</button>
              </div>
            </section>
          );
        })}
    </div>
  );
}
