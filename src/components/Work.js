import React from 'react'
import rns from '../picture/carpool.png'
import { Typography } from '@mui/material'
function Work() {
  return (
    <>
      <Typography variant='h4'>What I Have Done</Typography>
        <div id="WorkPage">
          <div id="job">
            <div id="imge">
            <img src={rns}></img>
            </div>
            <div id='desc' >
            <p>Web developer</p>
              Created a comprehensive full-stack carpooling website aimed at connecting individuals to facilitate ride-sharing,
             thereby reducing travel costs. Leveraging a technology stack that includes Python Flask and MongoDB, 
             I successfully designed and implemented this platform to offer a seamless and user-friendly experience. 
             My role encompassed the entire development lifecycle, from conceptualization and database design to front-end development 
             and back-end functionalities.

            </div>
          </div>
        </div>
    </>
  )
}

export default Work