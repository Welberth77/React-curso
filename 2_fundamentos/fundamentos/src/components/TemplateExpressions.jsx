const TemplateExpressions = () => {

    const name = "Wel"
    const data = {
        age: 20,
        job: "Programmer",

    }

    return (
        <>
            <h2>Olá, {name}! </h2>
            <p>Você tem {data.age} anos e Você atua como {data.job} </p>
        </>
    ) 
}

export default TemplateExpressions