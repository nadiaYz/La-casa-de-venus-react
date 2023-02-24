import React, { useEffect, useState } from 'react'
import '../components/Greeting.css'
import Lista from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting })  => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(false)
    const {name}= useParams();

    useEffect(() => {
    const obtenerProductos = async () => {
        try {
            const res = await fetch("./productos.json")
            const data = await res.json()
            setProductos(data);
        }
        catch{setError(true)}
    }
    obtenerProductos();
    }, []);

    return (
        <>
            <div className='greeting'>{greeting}</div>

    {!error ? (
        <>
            {productos.length ? (
                <Lista productos={productos}  />
            ) : (
                <h1>Cargando...</h1>
            )}
        </>
    ):(
        <h1>Hubo un error</h1>
    )}
    </>
    )
}

export default ItemListContainer;