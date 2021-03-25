/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// import logo from '../../images/logo.svg'

const Header = () => (
  <div className="header">
    <div className="extenalNav"></div>
    <Grid container className="container">
      <Grid item sm={4} xs={12} className="logo">
        <div className="logoContainer"></div>
      </Grid>
      <Grid item sm={4} xs={12} className="team_menu">
        <ul>
          <Link to=""><li>Matches<KeyboardArrowDownIcon style={{ fontSize: '35', marginTop: '-4px', marginBottom: '-5px' }}/></li></Link>
          <Link to=""><li>Teams<KeyboardArrowDownIcon style={{ fontSize: '35', marginTop: '-4px', marginBottom: '-5px' }}/></li></Link>
          <Link to=""><li>Squad</li></Link>
          <Link to=""><li>Former</li></Link>
        </ul>
        <div className="menu"></div>
      </Grid>
      <Grid item sm={4} xs={12} className="authSection">
        <a href="/">Login</a>
      </Grid>
    </Grid>
  </div>
)

export default Header