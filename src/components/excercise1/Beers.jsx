const Beers = ({ beers }) => {
  return (
    <>
     <h1>Todas las cervezas</h1>
     {beers.map((beer) => (
        <div key={beer.id}>
            <h2>{beer.beerName}</h2>
            <h3>${beer.price * 1500}</h3>
        </div>
     ))}
    </>
  )
}
export default Beers