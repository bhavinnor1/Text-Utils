import React from "react";
import { Accordion, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

function About(props) {
  // const { theme, themeState, handleTheme } = props;
  return (
    <Container style={{
      backgroundColor: props.mode === "light" ? "white" : document.body.backgroundColor,
      color: props.mode === "light" ? "black" : "white",
    }}>
      <h1 className="mt-3">About us</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>

    // <div className="container" style={{
    //   backgroundColor: props.mode === "light" ? "white" : document.body.backgroundColor,
    //   color: props.mode === "light" ? "black" : "white",
    // }}>
    //   <h1 className="mt-3">About us</h1>
    //   <div className="accordion" id="accordionExample" >
    //     <div className="accordion-item" >
    //       <h2 className="accordion-header" id="headingOne" >
    //         <button
    //           className="accordion-button"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //         // style={theme}
    //         >
    //           Accordion Item #1
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseOne"
    //         className="accordion-collapse collapse show"
    //         aria-labelledby="headingOne"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body">
    //           <strong>This is the first item's accordion body.</strong> It is
    //           shown by default, until the collapse plugin adds the appropriate
    //           classNamees that we use to style each element. These classNamees
    //           control the overall appearance, as well as the showing and hiding
    //           via CSS transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingTwo">
    //         <button
    //           // style={theme}
    //           className="accordion-button collapsed"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="collapseTwo"
    //         >
    //           Accordion Item #2
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseTwo"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingTwo"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body">
    //           <strong>This is the second item's accordion body.</strong> It is
    //           hidden by default, until the collapse plugin adds the appropriate
    //           classNamees that we use to style each element. These classNamees
    //           control the overall appearance, as well as the showing and hiding
    //           via CSS transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingThree">
    //         <button
    //           // style={theme}
    //           className="accordion-button collapsed"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseThree"
    //           aria-expanded="false"
    //           aria-controls="collapseThree"
    //         >
    //           Accordion Item #3
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseThree"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingThree"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body">
    //           <strong>This is the third item's accordion body.</strong> It is
    //           hidden by default, until the collapse plugin adds the appropriate
    //           classNamees that we use to style each element. These classNamees
    //           control the overall appearance, as well as the showing and hiding
    //           via CSS transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    /* <div className="container mt-3">
      <button onClick={handleTheme} className="btn btn-primary">
        {themeState}
      </button>
    </div> */
    // </div>
  );
}

export default About;
