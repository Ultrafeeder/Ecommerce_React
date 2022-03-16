import * as React from "react";
const print = require("../data/prints.json");

console.log(print.prints);

export default function Marketplace() {
  let prints = print.prints;

  return prints.map((work) => {
    return (
      <div key={work.id}>
        <img src={work.item_path} alt="art" />
        <p>{work.item_name}</p>
        <p>{work.item_price}</p>
        <p>{work.item_description}</p>
      </div>
    );
  });
}
