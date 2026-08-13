import './App.css'
import Beers from './components/excercise1/Beers';
import AvailableBeers from './components/excercise2/AvailableBeers';
import BeersQuantity from './components/excercise3/BeersQuantity';
import BeersPrices from './components/excercise4/BeersPrices';

const beers = [
        {
            id: 1,
            beerName: "American",
            beerStyle: "IPA",
            price: 2,
            isAvailable: false,
        },
        {
            id: 2,
            beerName: "Argenta",
            beerStyle: "ipa",
            price: 4,
            isAvailable: false,
        },
        {
            id: 3,
            beerName: "Irish",
            beerStyle: "Red",
            price: 4,
            isAvailable: true,
        },
        {
            id: 4,
            beerName: "Scotish",
            beerStyle: "Red",
            price: 3,
            isAvailable: true,
        },
        {
            id: 5,
            beerName: "DeEssoCiTratta",
            beerStyle: "APA",
            price: 3,
            isAvailable: true,
        },
        {
            id: 6,
            beerName: "Santa APA",
            beerStyle: "APA",
            price: 3,
            isAvailable: true,
        },
        {
            id: 7,
            beerName: "German",
            beerStyle: "Pilsen",
            price: 6,
            isAvailable: true,
        },
        {
            id: 8,
            beerName: "London Porter",
            beerStyle: "Porter",
            price: 2,
            isAvailable: true,
        },
        {
            id: 9,
            beerName: "Scottish ALE",
            beerStyle: "Red",
            price: 5,
            isAvailable: false,
        },
    ];

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
