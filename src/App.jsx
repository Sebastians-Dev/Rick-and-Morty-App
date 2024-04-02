import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'

function App() {

  const randomLocation = getRandomNumber(126)
  const [locationSelect, setLocationSelect] = useState(randomLocation)

  const url =`https://rickandmortyapi.com/api/location/${locationSelect || getRandomNumber(126)}`;
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [locationSelect])

  return (
    <div className='app' >
      <img className='app__title' src="/img/header1.png" alt="" />
      <FormSearch
      setLocationSelect = {setLocationSelect}
      />
      {
        hasError
        ? <h2 className='app_error' >Hey! You must provide an id from 1 to 126 </h2>
        :(
          <>
            <LocationInfo 
              location= {location}
              />
              <div className='container-resident' >
                {
                  location?.residents.map(url => (
                    <ResidentCard 
                      key={url}
                      url={url}
                    />
                  ) )
                }
              </div>
            </>
          )
      }
      
    </div>
  )
}

export default App
