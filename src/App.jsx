import Beers from './components/excercise1/Beers';
import AvailableBeers from './components/excercise2/AvailableBeers';
import BeersQuantity from './components/excercise3/BeersQuantity';
import BeersPrices from './components/excercise4/BeersPrices';
import { beers } from './components/data/beers';
import './App.css'

function App() {
  return (
    <>
     <Beers beers={beers}/>
     <AvailableBeers beers={beers}/>
     <BeersQuantity beers={beers}/>
     <BeersPrices beers={beers}/>
    </>
  )
}

export default App
