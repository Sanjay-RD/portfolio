import React from "react"
import one from "../image/one.jpg"
import two from "../image/two.png"
import CardBox from "./CardBox"

function Work() {
  return (
    <div
      style={{
        backgroundColor: "#EAEAEA",
        padding: "40px 0px",
        borderTop: "1px solid #c1c1c1",
        borderBottom: "1px solid #c1c1c1",
      }}
    >
      <div className="main-container">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Russo One, sans-serif ",
            marginBottom: "20px",
          }}
        >
          Some of my past project
        </h1>
        <div class="post-wrapper">
          <CardBox
            image={one}
            title="Covid-19 Tracker"
            content="This is covid-19 tracker made by using React Js and Material-ui"
          />
          <CardBox
            image={two}
            title="Portfolio Site"
            content="This site is made using React Js and Material-ui"
          />
          <CardBox
            image={one}
            title="E-commerce Site"
            content="This site is made using react js, material-ui and node Js"
          />
        </div>
      </div>
    </div>
  )
}

export default Work
