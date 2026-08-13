const BeersQuantity = ({ beers }) => {
    const redBeers = beers.filter((b) => b.beerStyle.toUpperCase() === "RED").length;
    const ipaBeers = beers.filter((b) => b.beerStyle.toUpperCase() === "IPA").length;
  
    return (
    <>
    <h1>Cantidad de cervezas</h1>
    <h2>Red: {redBeers}</h2>
    <h2>IPA: {ipaBeers}</h2>
    </>
  )
}
export default BeersQuantity