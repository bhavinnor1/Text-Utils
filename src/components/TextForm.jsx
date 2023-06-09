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
        <div className="h2 mt-20 mb-10">
          <strong>{props.heading}</strong>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            developed by :- Bhavin Nor
            <a className="icon-link" style={{ margin: "0 5px" }} href="https://www.linkedin.com/in/bhavin-nor/" target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
            <a className="icon-link mx-10" style={{ margin: "0 5px 0 0" }} href="https://github.com/bhavinnor1" target="_blank">
              <i className="bi bi-github" style={{ color: `${props.mode == "light" ? "black" : "white"}` }}></i>
            </a>
            <a className="icon-link mx-10" style={{ margin: "0 5px 0 0" }} href="https://www.youtube.com/@codegeassprogramming" target="_blank">
              <i className="bi bi-youtube" style={{ color: "red" }}></i>
            </a>
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "rgba(255,255,255,0.43)",
              color: props.mode === "light" ? "black" : "white",
              borderColor: props.mode === "light" ? "inherit" : "white",
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
          <b>{props.text.trim() == "" ? 0 : props.text.trim().replace(/\n/g, " ").split(" ").filter(a => { return a !== '' }).length} words</b> and{" "}
          <b>{props.text.trim().length} characters</b>
        </p>
        <p>
          {/* <strong>{console.log(props.text.replace(/\n/g, " ").split(" ").filter(a => { return a !== '' }))}</strong> */}
          <b>{props.text.replace(/\n/g, " ").split(" ").filter(a => { return a !== '' }).length * 0.008} minutes</b> to read
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
