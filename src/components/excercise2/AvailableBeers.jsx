const AvailableBeers = ({ beers }) => {
  return (
    <>
    <h1>Cervezas disponibles</h1>
    {beers
    .filter((beer) => beer.isAvailable)
    .map((beer) => (
        <div>
            <h2>{beer.beerName}</h2>
        </div>
    ))}
    </>
  )
}
export default AvailableBeers