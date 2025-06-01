import { useState } from 'react'
import './App.css'
import DropDown from './components/DropDown'

const data = {
  "Seattle": ["Space Needle", "Pike Place Market", "Chihuly Garden and Glass", "The Museum of Flight","Washington State Ferries","Alki Beach", "Sky View Observatory"],
  "Portland": ["Portland Japanese Garden", "International Rose Test Garden", "Pittock Mansion", "Oregon Zoo"],
  "Chicago": ["The Art Institute of Chicago", "Millennium Park", "The Magnificent Mile", "Museum of Science and Industry","Lincoln Park", "Chicago Riverwalk"],
  "San Francisco": ["Alcatraz Island", "Golden Gate Bridge", "Lombard Street", "Pier 39", "Walt Disney Family Museum", "Golden Gate Park"]
}

const cities = Object.keys(data)

function App() {
  const [city, setCity] = useState("Portland");
  const [placesToVisit, setPlacesToVisit] = useState([]);

  const placesToVisitOptions = data[city];

  const handleSetCity = (newCity) => {
    if (city !== newCity) {
      setPlacesToVisit([]);
      setCity(newCity);
    }
  }

  return (
    <div id="App">
      <h1>Plan Your Next City Visit</h1>
      <DropDown multiSelect={false} options={cities} label={"City to Visit"} selectedValue={city} setSelectedValue={handleSetCity}/>
      <DropDown multiSelect={true} options={placesToVisitOptions} label={"Places to Visit"} selectedValues={placesToVisit} setSelectedValues={setPlacesToVisit}/>
      <div className="city-image-container">
        <img src={`/images/${city}.png`} alt={city} />
      </div>
    </div>
  )
}

export default App
