import React from 'react'

const CreatePost = () => {
    
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [lista, setLista] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const lista = await data.json()
        setLista(lista)
    }
    
    const guardarDatos = (e) => {
        e.preventDefault()
        
        if(!title.trim()){
            return
        }
        if(!content.trim()){
            return
        }

        e.target.reset()
        setTitle('')
        setContent('')
        
        setLista([
            {title: title },
            ...lista
            
        ])
        
    }

    return (
        <div className='container'>
            <h2 className='mt-5'>Create Post</h2>
            <form onSubmit={guardarDatos}>
                <input 
                    type='text' 
                    placeholder='Enter title'
                    className='form-control mb-2' 
                    onChange={ (e) => setTitle(e.target.value)}
                    />
                    
                    
                <textarea 
                placeholder='Enter content' 
                className='form-control mb-2'
                onChange={ (e) => setContent(e.target.value)}
                />

                <button className='btn btn-primary btn-block' type='submit'> Agregar </button>
                 
                <hr />
                
                <ul className='container-lista'>
                    {
                        lista.map(item => (
                            <li key={item.id} className="alert alert-secondary" role="alert">
                                    {item.title}
                            </li>
                            
                        ))
                    }
                </ul>
                
            </form>
        </div>
    )
}

export default CreatePost
