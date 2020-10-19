import React from "react"
import Slider from "react-slick"
import one from "../image/one.jpg"
import two from "../image/two.png"
import three from "../image/three.jpg"

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
}

function ImgSlider() {
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Slider {...settings}>
        <div>
          <div
            style={{
              height: "100vh",
              background: `url(${one})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              height: "100vh",
              background: `url(${two})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              height: "100vh",
              background: `url(${three})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </Slider>
    </div>
  )
}

export default ImgSlider
