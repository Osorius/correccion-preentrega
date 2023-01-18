import React from 'react';
import Contador from './Contador';

const ItemDetail = ({ item }) => {
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
                <Contador stock={10} />
            </article>
        </div>
    );
};

export default ItemDetail;
