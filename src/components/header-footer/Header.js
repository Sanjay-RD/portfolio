import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import React, { useEffect, useState } from "react"
import SideBar from "./SideBar"

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    // backgroundColor: "#333",
  },
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
}))
const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [headershow, setHeadershow] = useState(false)
  // const [headerdisable, setHeaderdisable] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setHeadershow(true)
    } else {
      setHeadershow(false)
    }
  }

  const handleDrawer = (value) => {
    setOpen(value)
  }
  return (
    <div>
      <AppBar
        position="fixed"
        className={classes.root}
        style={{
          backgroundColor: headershow ? "#333" : "transparent",
          transition: "all 1s ease",
        }}
      >
        <Toolbar variant="dense" className={classes.toolbarStyle}>
          <Typography variant="h6">Sanjay RD</Typography>
          <IconButton color="inherit" onClick={() => handleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBar open={open} onclose={(value) => handleDrawer(value)} />
    </div>
  )
}

export default Header
