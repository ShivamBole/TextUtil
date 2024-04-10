import React from "react";
import { useState } from "react";

export default function Textform() {
  const [text, settext] = useState("");
  const handelUpper = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handelCopy = () => {
    // let textcpy=document.getElementById()
    navigator.clipboard.writeText(text);
  };
  const handelClear = () => {
    settext("");
  };
  const handelLower = () => {
    settext(text.toLowerCase());
  };

  const handelOnChange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <div className="my-3 container">
        <center>
          <h2>Enter the text below</h2>
        </center>
        <textarea
          className="form-control"
          placeholder="enter the text"
          value={text}
          onChange={handelOnChange}
          id="Textarea1"
          rows="8"
        ></textarea>
        <button
          type="button "
          className="my-3 btn btn-info"
          onClick={handelUpper}
        >
          To Upper Case
        </button>
        <button
          type="button "
          className="my-3 mx-2 btn btn-info"
          onClick={handelLower}
        >
          To Lower Case
        </button>
        <button
          type="button "
          className="my-3 mx-2 btn btn-info"
          onClick={handelCopy}
        >
          Copy text
        </button>
        <button
          type="button "
          className="my-3 mx-2 btn btn-info"
          onClick={handelClear}
        >
          Clear text
        </button>
        {/* <button type="button " className="my-3 mx-2 btn btn-info" onClick={handelLower}>To Lower Case</button> */}
      </div>

      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          your text containes{" "}
          <span className="fw-bold">
            {text.length >= 1 ? text.split(" ").length : text.length}
          </span>{" "}
          words and has <span className="fw-bold">{text.length} </span>
          charecters
        </p>
        <p>
          You need{" "}
          <span className="fw-bold">
            {text.length >= 1 ? 0.008 * text.length : text.length}
          </span>{" "}
          minuts to read
        </p>
        <h2 claassName="my-3">Preview</h2>
        <p placeholder="there is nothing to preview" color="white">
          {text}
        </p>
      </div>
    </>
  );
}
