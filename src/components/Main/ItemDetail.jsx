import React, { useContext, useState } from 'react';
import { contexto } from '../Context/CustomProvider';
import Contador from './Contador';

const ItemDetail = ({ item }) => {

    const [confirmado, setConfirmado] = useState(false)
    const { agregarProducto } = useContext(contexto)
    const [cantidadLocal, setCantidadLocal] = useState(1)

    const handleAdd = (cantidad) => {
        setCantidadLocal(cantidad)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(item, cantidadLocal)
    }

    return (
        <div className="container-page container-detail">
            <img src={item.img} alt="detail" />

            <article>
                <h2>{item.title}</h2>
                <section>
                    <h3>$ {item.price}</h3>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                <Contador stock={10} handleAdd={handleAdd} />
                {confirmado && <button onClick={handleClick}>Agregar al carrito</button>}
            </article>
        </div>
    );
};

export default ItemDetail;
