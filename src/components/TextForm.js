import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // console.log("handle was clicked");
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    // console.log("handle was clicked");
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "success");
  };

  const handleClear = () => {
    let newText = "";
    // console.log("handle was clicked");
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };
  // const handleCopy = () => {
  //   let newText = text.select();
  //   setText(newText);
  // };
  const handleOnChange = (e) => {
    // console.log("on change");
    setText(e.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the textbox to preview in here"}
        </p>
      </div>
    </>
  );
}
