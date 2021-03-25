/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react'

import Banner from './Banner'
import Activities from './Activities'
import Latestnews from './Latestnews'
import Matchpoint from './Matchpoints'
import Performers from './Performers'

export default () => (
  <Fragment>
    <Banner />
    <Activities />
    <Matchpoint />
    <Performers />
    <Latestnews />
  </Fragment>
)