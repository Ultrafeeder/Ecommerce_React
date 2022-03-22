import * as React from "react";
import Footer from "../component/Footer";
const form = document.getElementById("form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("submit");
if (submit) {
  submit.addEventListener("click", false);
}

export default function Form() {
  return (
    <div>
      <div className="error"></div>
      <form action="get" id="form" className="f-contact">
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

form.addEventListener("submit", (e) => {
  let errorMessage = [];
  if (fName.value === "") {
    errorMessage.push("Please enter your First Name.");
  }
  if (lName.value === "") {
    errorMessage.push("Please enter your last Name.");
  }
  if (phone.value.length < 10 || phone.value.length > 15) {
    errorMessage.push("Please enter a valid phone number");
  }
  if (
    !email.value.includes("@") ||
    !email.value.includes(".com") ||
    !email.value.includes(".net") ||
    !email.value.includes(".org")
  ) {
    errorMessage.push("Please enter a valid email");
  }
  if (errorMessage.length > 0) {
    e.preventDefault();
    error.innerText = errorMessage.join(" ");
  }
});
