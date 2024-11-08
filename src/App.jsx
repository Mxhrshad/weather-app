import axios from "axios"
import { useState } from "react"
import Weather from "./components/weather";

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("")
  const API_KEY = "e28b9a47c5d43f9600689e81343bb2bc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;


  const searchLocation = (e) => {
    if(e.key === "Enter"){
      axios.get(url)
      .then((response) => {
        setData(response.data)

      })
      setLocation("")
    }
  }

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input type="text" className="py-3 px-6 laptop:w-[700px] phone:w-3/4
        text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md" placeholder="Enter location" value={location} onChange={(e) =>setLocation(e.target.value)} onKeyDownCapture={searchLocation} />
      </div>

      <Weather weatherData = {data} />
    </div>
  )
}

export default App
