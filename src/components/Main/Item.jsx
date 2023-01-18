import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className="item">
            <img src={producto.img}  width= "250px" height= "250px" stroke= "#000"alt={producto.title} />
            <article className="info">
                <h2>{producto.title}</h2>
                <div className="info-price">
                    <h3>${producto.price}</h3>
                </div>
                <Link  to={`/detail/${producto.id}`}>
                   <button className='ver-detalle'>Ver detalle</button> 
                </Link>
            </article>
        </div>
    );
};

export default Item;
