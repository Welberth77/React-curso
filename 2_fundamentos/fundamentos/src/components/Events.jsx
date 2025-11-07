const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)

        console.log("Ativou o Evento!")
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                {/* Função no próprio evento */}
                <button onClick={() => console.log("clicou!")}>Clique aqui também!</button>
                {/* Aqui já esta afetando o HTML, com uma lógica complexa no meio */}
                {/* O ideal seria separar */}
                <button onClick={() => {
                    if(true) {
                        console.log("Isso não deveria existir");
                    }
                }}>Clica aqui, por favor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </>
    )
}

export default Events