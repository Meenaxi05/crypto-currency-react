import { useState , useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import TodayInfo from './components/TodayInfo'

function App() {
  const [coins, setCoins ] = useState([])

  useEffect(() => {
    const fetchData = async  () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&locale=en`
        )
        setCoins(response.data)
        console.log(response.data[0])
      } catch(error){
        console.log(error, "error cant display");
      }
    } ;
    fetchData();

  }, [])

  return (
    <>
     {/* <h1 className='text-red-700 text-center'> Crypto Currency Dashboard</h1> */}
     <div className='bg-[#26272b]'>
     <Navbar/>
     <TodayInfo/>
     <Coins coins={coins}/>
     </div>
    </>
  )
}

export default App
