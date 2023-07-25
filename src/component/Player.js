import React from 'react'

function Player({urlPlayer, name}) {
  return (
    <div>
        <div className='player'>
            <p>{name}</p>
            <img className='avatar' src={urlPlayer} alt="player"/>
        </div>
    </div>
  )
}

export default Player