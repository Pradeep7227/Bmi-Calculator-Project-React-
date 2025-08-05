import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [BMI,setBMI] = useState("");
  const [message,setMessage] = useState("");

  const calculateBMI = () => {
      if(!height || !weight){
        alert("Please enter both height and weight");
      }

      const heightInMeters = height / 100;
      const bmiVal = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiVal);

      if (bmiVal < 18.5) setMessage("Underweight");
      else if (bmiVal < 25) setMessage("Normal weight");
      else if (bmiVal < 30) setMessage("Overweight");
      else setMessage("Obesity");
      
  }

  return (
    <div className="bmi-box">
        <h2>BMI Calculator</h2>
        Weight : <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Enter weight'/> <br/> <br/>

        Height : <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Enter height'/> <br /><br />

       <button onClick={calculateBMI}>Calculate</button> <br /><br />

       <h3>Your BMI is : {BMI}</h3> <p>{message}</p>

    </div>
  );
}

export default App
