import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*its best practice to make variables and put those variables in curly brackets 
 inside the jsx */
function App(){
  const date = new Date()
  const hours = date.getHours() % 12
  let timeOfDay

  if(hours < 12){
    timeOfDay = "morning"
  }else if(hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  }else {
    timeOfDay = "night"
  }

  return(
    <h1>Good {timeOfDay}!</h1>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
