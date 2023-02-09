import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { productsCollection } from '../../firebaseConfing';
import { getDocs , query , where } from "firebase/firestore"
import { toast } from 'react-toastify';



const ItemListContainer = ({ saludo }) => {
    
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {

        const getProducts = () => {
            
                let filtro 

                if(categoryName){
                 filtro = query(productsCollection,where("categoria","==",categoryName))
                }else {
                    filtro = productsCollection
                }

                const pedidoPorCategoria = getDocs(filtro)
    
                pedidoPorCategoria
                    .then((resultado) => {
                        const productos = resultado.docs.map((doc) => {
                            return { id : doc.id , ...doc.data() }
                        })
                        toast.info("Loading...")
                        setItems(productos)
                    })
                    .catch((error) => {
                        toast("Hubo un error!")
                        console.log(error)
                    })
        }

        getProducts()

    }, [categoryName]);


    return (
        <div id="eduardo" className="container container-page">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;