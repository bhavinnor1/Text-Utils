import React from "react";

function TextForm(props) {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : document.body.backgroundColor,
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        {/* <h2>Text to UpperCase Coverter</h2> */}
        <div className="h2">
          <strong>{props.heading}</strong>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "inherit",
              color: props.mode === "light" ? "black" : "white",
            }}
            placeholder="Put Text Here!"
            value={props.text}
            onChange={props.onChange}
            rows={8}
            cols={30}
            className="form-control"
            id="exampleFormControlTextarea1"
          ></textarea>
        </div>
        {/* <textarea
          placeholder="Put Text Here!"
          value={props.text}
          onChange={props.onChange}
          rows={8}
          cols={30}
        ></textarea> */}
        <button onClick={props.onUpper} className="btn btn-primary mx-1 mb-2">
          UPPERCASE
        </button>
        <button onClick={props.onLower} className="btn btn-primary mx-1 mb-2">
          lowercase
        </button>
        <button onClick={props.onUndo} className="btn btn-primary mx-1 mb-2">
          Undo
        </button>
        <button onClick={props.onRedo} className="btn btn-primary mx-1 mb-2">
          Redo
        </button>
        <button onClick={props.onClear} className="btn btn-primary mx-1 mb-2">
          Clear Text
        </button>
        <button onClick={props.onCopy} className="btn btn-primary mx-1 mb-2">
          Copy to ClipBoard
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : document.body.backgroundColor,
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>
          <strong>Your Text Summary</strong>
        </h2>
        <p>
          <b>{props.text.trim() == "" ? 0 : props.text.trim().split(" ").filter(a => { return a !== '' }).length} words</b> and{" "}
          <b>{props.text.trim().length} characters</b>
        </p>
        <p>
          <b>{props.text.trim().split(" ").filter(a => { return a !== '' }).length * 0.008} minutes</b> to read
          this Text.
        </p>
        <h2>
          <strong>Preview</strong>
        </h2>
        <p>
          {props.text === "" ? "Enter your text to preview here!" : props.text}
        </p>
      </div>
    </>
  );
}

export default TextForm;
