import React, { useState }  from 'react'
import './FamilyFights.css'
import Tasks from './Tasks';
import NavBar from './NavBar';
import Progress from './Progress';
import Navigation from './Navigation'

function FamilyFights() {
  const [activeButton, setActiveButton] = useState("my-fights");
  const [showTasks, setShowTasks] = useState(false);
  const [showTasksOther, setShowTasksOther] = useState(false);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "my-fights") {
      setShowTasks(true);
    } else {
      setShowTasks(false);
    }
    if (buttonName === "other-fights") {
      setShowTasksOther(true);
    } else {
      setShowTasksOther(false);
    }
  };

  return (
    <div className='mainscreen'>
      <div className='banner'>
    <h1>
      Family Fights
    </h1>
    <button class="account-button">
    <span class="account-text">Account</span>
  <span class="account-icon">⚙️</span>
  </button>
  </div>


  <div className="two-buttons">
        <button
          className={activeButton === "my-fights" ? "active" : ""}
          onClick={() => handleClick("my-fights")} >
          My Fights
        </button>
        <button
          className={activeButton === "other-fights" ? "active" : ""}
          onClick={() => handleClick("other-fights")}>
          Other Fights
        </button>
      </div>
      <div>
        {showTasks && <Tasks />}
        {showTasksOther && <Progress/>}
        </div>
        <Navigation/>
        Text
    </div>
  )
}

export default FamilyFights
