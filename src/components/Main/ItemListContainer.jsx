import React, { useEffect, useState } from 'react';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ titulo }) => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                const productosFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                );

                const prodListados = categoryName
                    ? productosFiltrados
                    : products;
                setTimeout(() => {
                    res(prodListados);
                }, 500);
            });
        };
        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);


    return (
        <div id="title" className="container container-page">
            <h2>{titulo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
