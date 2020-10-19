import { Button, Grid } from "@material-ui/core"
import React from "react"
import profile from "../image/profile.jpg"
import GetAppIcon from "@material-ui/icons/GetApp"

function Content() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} md={3} xs={12}>
          <div
            style={{
              background: `url(${profile})`,
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundSize: "cover",
            }}
          ></div>
        </Grid>
        <Grid item sm={12} md={9} xs={12}>
          <div className="about-me">
            <h2 style={HeadingStyle}>About Me</h2>
            <p style={paragraphStyle}>
              My name is Sonny, I'm a Full Stack ReactJS Developer. Currently
              I'm working at Clever Programmer while also coaching
            </p>
          </div>
          <Grid container>
            <Grid item sm={12} md={6} xs={12}>
              <div className="contact-details" style={{ marginTop: "15px" }}>
                <h2 style={HeadingStyle}>Contact Details</h2>
                <ul style={ul}>
                  <li style={li}>Sanjay Rishidev</li>
                  <li style={li}>Chabhail,kathmandu</li>
                  <li style={li}>9803349210</li>
                  <li style={li}>rishidevsanjay9@gmail.com</li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={12} md={6} xs={12}>
              <div className="resume" style={resume}>
                <Button variant="contained" startIcon={<GetAppIcon />}>
                  Download Resume
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Content

// CSS Styling
const ul = {
  listStyle: "none",
  marginLeft: "-20px",
  marginTop: "10px",
  marginBottom: "10px",
}

const li = {
  margin: "10px 0px",
  fontSize: "18px",
  fontFamily: "Roboto",
  color: "#8a8a8a",
}

const HeadingStyle = {
  fontFamily: "Roboto",
}

const paragraphStyle = {
  lineHeight: "30px",
  margin: "10px 0px",
  color: "#8a8a8a",
}

const resume = {
  marginTop: "40px",
}
