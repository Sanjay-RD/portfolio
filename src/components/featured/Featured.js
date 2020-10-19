import React from "react"
import ImgSlider from "./ImgSlider"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { IconButton, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#fff",
    fontSize: "30px",
  },
}))
function Featured() {
  const classes = useStyles()
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ImgSlider />
      <div className="content" style={{ zIndex: "100" }}>
        <h1>I'm Sanjay Rishidev</h1>
        <p>Working as a frontend Developer in react.js</p>
        <div className="link">
          <IconButton color="inherit">
            <FacebookIcon className={classes.link} />
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon className={classes.link} />
          </IconButton>
          <IconButton color="inherit">
            <GitHubIcon className={classes.link} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Featured
