import { Grid } from "@material-ui/core"
import React from "react"

function Experience() {
  return (
    <div
      style={{ backgroundColor: "#fff", color: "#333", padding: "50px 0px" }}
    >
      <Grid container>
        <Grid item sm={1} lg={3} xs={1}></Grid>
        <Grid item sm={10} lg={6} xs={10}>
          <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
              <h2>Experience</h2>
            </Grid>
            <Grid item sm={8} xs={12}>
              <div className="experience" style={experience}>
                <ul style={ul}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Material UI</li>
                </ul>
                <ul style={ul}>
                  <li>React Js</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Mongodb</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={1} lg={3} xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default Experience

// Style
const experience = {
  backgroundColor: "#F0EAD6",
  padding: "20px 0px",
  display: "flex",
  justifyContent: "space-evenly",
  //   marginTop: "10px",
}

const ul = {
  listStyle: "none",
  fontFamily: "Russo One,sans-serif",
}
