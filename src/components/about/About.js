import { Grid } from "@material-ui/core"
import React from "react"
import Content from "./Content"

function About() {
  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
        color: "#FFFFFF",
        padding: "50px 0px",
        fontFamily: "Roboto",
      }}
    >
      <Grid container>
        <Grid item sm={2} xs={1}></Grid>
        <Grid item sm={8} xs={10}>
          <Content />
        </Grid>
        <Grid item sm={2} xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default About
