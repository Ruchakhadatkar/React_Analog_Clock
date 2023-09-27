import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  const [time, setTime] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());

      setTime({
        hr: (date.getHours() % 12) * 30 + date.getMinutes() / 2 + 90,
        min: date.getMinutes() * 6 + 90,
        sec: date.getSeconds() * 6 + 90,
      });
    }, 1000);
  }, [time]);

  return (
    <div className="App">
      <div className="container">
        <div className="watch">
          <div className="center"></div>
          <div
            className="hour"
            style={{ transform: `rotate(${time.hr}deg)` }}
          ></div>
          <div
            className="minute"
            style={{ transform: `rotate(${time.min}deg)` }}
          ></div>
          <div
            className="second"
            style={{ transform: `rotate(${time.sec}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
