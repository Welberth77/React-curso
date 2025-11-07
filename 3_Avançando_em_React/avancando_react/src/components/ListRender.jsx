import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Welberth"])
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 22},
        {id: 3, name: "Josias", age: 26},
        {id: 4, name: "Welberth", age: 20}
    ])

    const deleteRandom = () => {
        // Número aleatório
        // Arredonda sempre para baixo
        const randomNumber = Math.floor(Math.random() * 5)

        // Pegando o valor antigo
        setUsers((prevUsers) => {
            // Os que não foram sorteado pelo random são mantidos
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        {/* Usando o indice da lista */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/* Usando a forma dinâmica,  */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>Nome: {user.name} - Idade: {user.age}</li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender