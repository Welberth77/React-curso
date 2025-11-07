const Challenge = () => {

    const a = 5
    const b = 5

    
    return (
        <>
            <h3>Number a: {a}</h3>
            <h3>Number b: {b}</h3>
            <div>
                <button onClick={() => console.log(a + b)}>Somar números aqui!</button>
            </div>
        </>
    )
}

export default Challenge