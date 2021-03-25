import React from 'react'
import { Grid } from '@material-ui/core'


const Activities = () => {
  return (
    <Grid className="activities" >
      <Grid container className="activities__main" spacing={3}>
        <Grid item sm={6} className="activities__main_container">
          <div className="activities__main_container--item">
            <div className="tournament__name">
              National Tournament - A
            </div>
            <div className="team__names">
              <h3>INS <span>Vs</span> TBCC</h3>
              <p>Match time 1:00 pm @ RCA 3</p>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} className="activities__main_container">
          <div className="activities__main_container--item">
            <div className="tournament__name">
              National Tournament - D
            </div>
            <div className="team__names">
              <h3>INS Blue <span>Vs</span> Punjab Tigers</h3>
              <p>Match time 1:00 pm @ RCA 7</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Activities