import { useContext } from "react";
import { contexto } from "../Context/CustomProvider";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { ventasCollection } from "../../firebaseConfing";

const Cart = () => {

    const { carrito, agregarProducto } = useContext(contexto)

    const handleClick = () => {
        agregarProducto()
    }

    const handleCompra = () => {
        //addDoc 
        const compra = {
            usuario: {
                nombre: "eduardo",
                email: "eduardopalacios@hotmail.com",
                telefono: "4453334"
            },
            carrito: carrito,
            fecha: serverTimestamp(),
        }

        const pedido = addDoc(ventasCollection, compra)

        pedido
            .then((resultado) => {
                console.log(resultado.id)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div>
            <h1>the Cart</h1>
            <button onClick={handleClick}>test carrito</button>
            {JSON.stringify(carrito)}
            <button onClick={handleCompra}>Finalizar Compra</button>
        </div>
    );
};

export default Cart;