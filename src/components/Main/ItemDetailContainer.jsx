import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore"
import { productsCollection } from '../../firebaseConfing';



const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [cargando,setCargando] = useState(true)

    const valor = useParams();

    useEffect(() => {
        const getProduct = () => {
            
            const referenciaDoc = doc(productsCollection,"7L4YlnHAB7bhW9uwXNCb")
            const pedido = getDoc(referenciaDoc)

            pedido
                .then((resultado) => {
                    const producto = resultado.data()
                    setItem(producto)
                    setCargando(false)
                })
                .catch((error) => {
                    console.log(error)
                })
        };

        getProduct()

    }, []);

    return <>{!cargando ? <ItemDetail item={item} /> : <p>Cargando...</p>}</>;
};

export default ItemDetailContainer;
