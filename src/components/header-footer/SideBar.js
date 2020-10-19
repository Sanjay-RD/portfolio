import { Drawer, List, ListItem } from "@material-ui/core"
import {scroller} from 'react-scroll'
import React from "react"

function SideBar(props) {

  const scrollToElement = (element)=>{
    scroller.scrollTo(element,{
      duration:1500,
      delay:100,
      smooth:true,
      offset:-100
    })
    props.onclose(false)
  }

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onclose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => scrollToElement('home')}>
            Home
          </ListItem>
          <ListItem button onClick={() => scrollToElement('about')}>
            About
          </ListItem>
          <ListItem button onClick={() => scrollToElement('works')}>
            Works
          </ListItem>
          <ListItem button onClick={() => scrollToElement('contact')}>
            Contact
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default SideBar
