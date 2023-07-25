import React from 'react'

function ChoiceCard({gameItem, handleGameItem}) {
    const {url, name} = gameItem;
  return (
    <div>
        <img 
        src={url} 
        alt={name}
        className='choice-card'
        onClick={()=>{
          handleGameItem(gameItem)
        }}/>
    </div>
  )
}

export default ChoiceCard