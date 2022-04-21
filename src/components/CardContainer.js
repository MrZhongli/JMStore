import React from 'react'



const CardContainer = (props) => {
  const estilos = {
    display:'flex',
    flexDireccion:'row'
  }
  return (
    <div style={estilos}>
        <div>
            Inicio del Card
        </div>
        {props.children}
        <div>
            Fin del Card
        </div>
    </div>
  )
}

export default CardContainer