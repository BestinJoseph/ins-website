import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Container } from '@material-ui/core'

import latestnews from '../../images/banner_001.jpg'

const Latestnews = () => {
  return (
    <Grid className="latestnews">
      <h2>Latest News</h2>
      <Grid container spacing={3} >
        <Grid item sm={6} xs={12} md={4} lg={3}>
          <Card spacing={3}>
            <CardActionArea>
              <CardMedia image={latestnews} title="ins_match" className="latest_image"/>
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quisquam!</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">INS A</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={6} xs={12} md={4} lg={3}>
          <Card spacing={3}>
            <CardActionArea>
              <CardMedia image={latestnews} title="ins_match" className="latest_image"/>
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quisquam!</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">INS A</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={6} xs={12} md={4} lg={3}>
          <Card spacing={3}>
            <CardActionArea>
              <CardMedia image={latestnews} title="ins_match" className="latest_image"/>
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quisquam!</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">INS A</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={6} xs={12} md={4} lg={3}>
          <Card spacing={3}>
            <CardActionArea>
              <CardMedia image={latestnews} title="ins_match" className="latest_image"/>
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quisquam!</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">INS A</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Latestnews