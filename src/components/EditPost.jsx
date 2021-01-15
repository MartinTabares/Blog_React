import React from 'react'

const EditPost = () => {

const [busqueda, setBusqueda] = React.useState('')
const [lista, setLista] = React.useState([])

const search = async e => {
e.preventDefault()
console.log(e);

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
            <form onSubmit={search} className='container'>
                <h2 className='mt-5'>Edit Post</h2>
                <input type="text"
                    className='form-controler mb-2'
                    placeholder='Ingrese ID'
                    onChange={e => setBusqueda(e.target.value)}
                    value={busqueda}
                    
                />
                <button className='btn btn-secondary btn-block' type='submit'>Buscar</button>
                
                <input 
                    type='text' 
                    placeholder='Enter title'
                    className='form-control mb-2' 
                    //onChange={ (e) => setTitle(e.target.value)}
                />
               
                <textarea 
                    placeholder='Enter content' 
                    className='form-control mb-2'
                    //onChange={ (e) => setContent(e.target.value)}
                />

                <button className='btn btn-warning btn-block' type='submit'>Editar</button>

            </form>
            
        </div>
    )
}

export default EditPost 