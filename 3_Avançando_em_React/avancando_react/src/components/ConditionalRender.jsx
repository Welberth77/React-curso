// Importando o useState
import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const[name2] = useState("W elberth")

    const [name] = useState("João")

  return (
    <div>
        <h1>Isso será exibido ?</h1>
        {/* (X &&) é igual a verdadeiro */}
        {x && <p>Se x for true, sim!</p>}
        {/* (!X &&) é igual a falso */}
        {!x && <p>Agora x é false</p>}

        {/* A primeira condição é verdadeira e a outra a falsa */}
        <h1>If e Else ternário </h1>
        {name === "João" ? (
          <div>
            <p>O nome é João</p>
          </div>
        ) : (
          <div>
            <p>O nome não é João</p>
          </div>
        )}

        <h1>Outro if e else ternário</h1>
        <h2>Seu nome é Welberth ?</h2>
        {name2 === "Welberth" ? (
          <div>
            <p>Sim meu nome é Welberth</p>
          </div>
        ) : (
          <div>
            <p>Não, meu nome é {name2}</p>
          </div>
        )}
    </div>
  )
}

export default ConditionalRender