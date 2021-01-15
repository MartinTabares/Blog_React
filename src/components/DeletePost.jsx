import React from 'react'

const DeletePost = () => {

const [busqueda, setBusqueda] = React.useState('')
const [lista, setLista] = React.useState([])

const eliminarPost = async e => {
e.preventDefault()
await fetch(`https://jsonplaceholder.typicode.com/posts/${busqueda}`,{method: 'DELETE'})
setLista(lista)
}

React.useEffect(() => {
    obtenerDatos()
}, [])



const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const lista = await data.json()
    setLista(lista)
    
}

    return (
        <div>
            <h2></h2>
            <form onSubmit={eliminarPost}>
            <input type="text"
            className='form-controler mb-2'
            placeholder='Ingrese ID'
            onChange={e => setBusqueda(e.target.value)}
            value={busqueda}
            />
            <button className='btn btn-secondary btn-block' type='submit'>Buscar</button>

            </form>
            <ul>
                    {
                        lista.map(item => (
                            <li key={item.id} className="alert alert-secondary" role="alert">
                                    {item.title}
                            </li>
                            
                        ))
                    }
                </ul>
        </div>
    )
}

export default DeletePost 
