import {Grid } from "@material-ui/core"
import React from "react"
import './Contact.css'

function Contact() {
  return (
          <div className="form-container">
            <h1>Get In Touch</h1>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" className="form-control"  />
            </div>
            <div className="form-group">
              <label>subject</label>
              <input type="text" placeholder="Enter your subject" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <input type="submit" value="Submit" className='submitBtn' />
          </form>
          </div>
  )
}

export default Contact
