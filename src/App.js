import React, {useState, useEffect} from 'react'
import DisplayPlayer from './component/DisplayPlayer'
import Choice from './component/Choice'
import Result from './component/Result'
import { getRandomGameItem, calculatorWinner } from "./component/CaculateWinner"
import './App.css'
const gameItems = [
    {
      url: "/images/paper.png",
      id: 0,
      winItemIds: [1],
      name: "Paper",
    },
    {
      url: "/images/rock.png",
      id: 1,
      winItemIds: [2],
      name: "Rock",
    },
    {
      url: "/images/scissor.png",
      id: 2,
      winItemIds: [0],
      name: "Scissor",
    },
  ];

function App() {

const [result, setResult] = useState("Ready");
const [humanGameItem, setHumanGameItem] = useState(null);
const [robotGameItem, setRobotGameItem] = useState(null);

const handleGameItem = (gameItem) =>{
    setHumanGameItem({...gameItem})
}

useEffect(()=>{
    if(humanGameItem){
        const robotNewItem = getRandomGameItem(gameItems);
        setRobotGameItem({...robotNewItem});
        setResult(calculatorWinner(humanGameItem,robotNewItem))
    }
},[humanGameItem])
  return (
    <div className='container'>
        <div className='main'>
            <Result
            user1GameItem={humanGameItem}
            user2GameItem={robotGameItem}
            result={result}/>
            <DisplayPlayer/>
            <Choice 
            gameItems={gameItems}
            handleGameItem={handleGameItem}/>
        </div>
    </div>
  )
}

export default App