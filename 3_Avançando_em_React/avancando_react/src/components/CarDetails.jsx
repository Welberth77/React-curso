const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {/* Condicional */}
            {newCar === true ? (
              <li>Esse carro é novo</li>
            ) : (
              <li>Esse carro é usado</li>
            )}
        </ul>
    </div>
  )
}

export default CarDetails