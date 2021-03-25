import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import propicture from '../../images/profile_pic_001.jpg'

const Performers = () => {
    return (
        <Container className="performer">
            <h2>2020 Leaders</h2>
            <Grid container className="performer__items" spacing={3}>
                <Grid item sm={6} xs={12} md={2} className="performer__items-item">
                    <div className="item">
                        <img src={propicture} alt="performer"/>
                        <div className="type_of_performer">Orange</div>
                        <div className="performer_scores">
                            <p>nickName</p>
                            <h2>800<span>runs</span></h2>
                            <Link to="">view full</Link>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} xs={12} md={2} className="performer__items-item">
                    <div className="item">
                        <img src="" alt="performer" />
                        <div className="type_of_performer">Purple</div>
                        <div className="performer_scores">
                            <p>nick name</p>
                            <h2>15<span>wickets</span></h2>
                            <Link to="">view full</Link>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} xs={12} md={2} className="performer__items-item">
                    <div className="item">
                        <img src="" alt="performer" />
                        <div className="type_of_performer">Higest Score</div>
                        <div className="performer_scores">
                            <p>nick name</p>
                            <h2>110*<span>score</span></h2>
                            <Link to="">view full</Link>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} xs={12} md={2} className="performer__items-item">
                    <div className="item">
                        <img src="" alt="performer" />
                        <div className="type_of_performer">Best Bowling</div>
                        <div className="performer_scores">
                            <p>nick name</p>
                            <h2>4/12</h2>
                            <Link to="">view full</Link>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} xs={12} md={2} className="performer__items-item">
                    <div className="item">
                        <img src="" alt="performer" />
                        <div className="type_of_performer">Performer</div>
                        <div className="performer_scores">
                            <p>nick name</p>
                            <h2>300<span>ponts</span></h2>
                            <Link to="">view full</Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Performers