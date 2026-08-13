const BeersPrices = ({ beers }) => {
    const availableBeers = beers.filter((b) => b.isAvailable);

    const lowestBeer = availableBeers.reduce((prev, curr) =>
        curr.price < prev.price ? curr : prev
    );

    const highestBeer = availableBeers.reduce((prev, curr) =>
        curr.price > prev.price ? curr : prev
    );

  return (
    <>
        <h1>Precio más bajo y más alto</h1>
        <div>
            <h2>{lowestBeer.beerName}</h2>
            <p>${lowestBeer.price}</p>
        </div>
        <div>
            <h2>{highestBeer.beerName}</h2>
            <p>${highestBeer.price}</p>
        </div>
    </>
  )
}
export default BeersPrices