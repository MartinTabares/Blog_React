import React from 'react'

const Home = () => {
    
    const [lista, setLista] = React.useState([])

    const eliminarPost = async e => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${e}`,{method: 'DELETE'})
        const newList = lista.filter(item => item.id !== e)
        setLista(newList)
    }
    
    const editarPost =  e => {
        
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
        <div className='container'>
            <div>
                <ul className='container-lista'>
                    {
                        lista.map((item,idx) => (
                            <li key={idx} className="alert alert-secondary" role="alert">
                                {item.title}
                                <button className='btn btn-warning btn-block' type='submit' onClick={() => editarPost(item)}>Editar</button>
                                <button className='btn btn-danger btn-block' type='submit' onClick={() => eliminarPost(item.id)}>Eliminar</button>
                            </li>
                        ))
                    }
                </ul>
            </div> 
        </div>         
    )
}

export default Home
