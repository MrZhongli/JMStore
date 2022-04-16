import React from 'react'

const CardContainer = (props) => {
  return (
    <div>
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