import { createContext, useEffect, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto


const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const agregarProducto = (producto, cantidad) => {

        const nuevoEstado = [...carrito]
        nuevoEstado.push(producto)

        setCarrito(nuevoEstado)

        setTotal(producto.precio * cantidad)
        setCantidad(cantidad)
    }

    const eliminarProducto = () => { }

    const vaciarCarrito = () => { 
        setCarrito([])
    }

    const estaEnCarrito = () => {
    }

    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        agregarProducto,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider