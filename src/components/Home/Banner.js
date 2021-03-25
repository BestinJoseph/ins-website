/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="banner">
    <div className="banner__content">
      <div className="content__header">INS A</div>
      <div className="content__context">
        <h2 className="content__context--headline">Lorem ipsum dolor sit amet consectetur.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit odio sunt minus aut laboriosam, at eligendi nobis quo nesciunt.</p>
        <Link to="">team player</Link>
      </div>
    </div>
  </div>
)