import React from 'react'
import Player from './Player'

function DisplayPlayer() {
  return (
    <div className='display'>
        <Player urlPlayer="/images/human.png" name="Human"/>
        <div className='battle'>VS</div>
        <Player urlPlayer="/images/robot.png" name="Robot"/>
    </div>
  )
}

export default DisplayPlayer