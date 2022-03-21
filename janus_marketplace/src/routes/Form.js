import * as React from "react";
import Footer from "../component/Footer";

export default function Form() {
  return (
    <div>
      <form action="get" className="f-contact">
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          className="inp-fill"
          placeholder="John"
          required
        ></input>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          className="inp-fill"
          placeholder="Doe"
          required
        ></input>
        <label htmlFor="phone">Phone No.:</label>
        <input
          type="text"
          id="phone"
          className="inp-fill"
          placeholder="##########"
          required
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          className="inp-fill"
          placeholder="email@company.com"
          required
        ></input>
        <label htmlFor="message">Your inquiry:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="type here"
        ></textarea>
        <input type="submit" id="submit" value="submit"></input>
      </form>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
