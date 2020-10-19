import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core"
import React from "react"
import {Link} from 'react-router-dom'

import "./work.css"

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "4px 7px 16px -5px rgba(0,0,0,0.69)",
  },
  fontFamily: {
    fontFamily: "Russo One, sans-serif",
  },
}))
function CardBox({ image, title, content }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" image={image} style={{ height: "150px" }} />
        <CardContent>
          <Typography
            variant="h5"
            component="h6"
            className={classes.fontFamily}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.fontFamily}
          >
            {content}
          </Typography>
          <Link to="/blog">
            <Button color="primary">Read More</Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardBox
