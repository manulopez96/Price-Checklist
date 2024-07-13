import React from "react";
import { FormItem } from "./FormItem";
import { useState, useEffect } from "react";

export const Main = ({ titulo = "lista 1" }) => {
    const [data, setData] = useState();
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    /*
    const forzarValores = () => {
        setItems([
            {
                descripcion: "Descripcion 1",
                precio: 100,
                cantidad: 1,
            },
            {
                descripcion: "Descripcion 2",
                precio: 2000,
                cantidad: 2,
            },
            {
                descripcion: "Descripcion 3",
                precio: 25021,
                cantidad: 2,
            },
        ]);
    };
    */
   
    const forzarValoresCero = () => {
        localStorage.clear();
        setItems([]);
    };

    const fetchList = async () => {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const title = await localStorage.key(i);
                if (title === titulo) {
                    let aux = await localStorage.getItem(title);
                    setItems(JSON.parse(aux).lista);
                }
            }
        }
    };

    const borrarUnItem = (index) => {
        let itemsCopia = [...items];
        itemsCopia.splice(index, 1);
        setItems(itemsCopia);
    };

    useEffect(() => {
        if (data) {
            setItems((prevItems) => [...prevItems, data]);
        }
    }, [data]);

    useEffect(() => {
        setTotal(0);
        if (items.length > 0) {
            localStorage.setItem(
                titulo,
                JSON.stringify({
                    lista: items,
                })
            );
            items.forEach((item) => {
                const subtotal = Number(item.precio) * Number(item.cantidad);
                setTotal((prevTotal) => prevTotal + subtotal);
            });
            console.log(items);
        }
    }, [items]);

    useEffect(() => {
        fetchList();
    }, [titulo]); // Solo se ejecuta cuando `titulo` cambia

    return (
        <div className="main">
            <FormItem setData={setData} />
            <h3 className="total">Total: ${total}</h3>
            <table className="table-main">
                {items && (
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th>Cant.</th>
                            <th>$</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                )}
                <tbody>
                    {items &&
                        items
                            .slice()
                            .reverse()
                            .map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="fila">
                                            {items.length - index}
                                        </td>
                                        <td className="fila">
                                            {item.descripcion}
                                        </td>
                                        <td className="fila">
                                            {item.cantidad}
                                        </td>
                                        <td className="fila">{item.precio}</td>
                                        <td className="fila">
                                            {item.precio * item.cantidad}
                                        </td>
                                        <td>
                                            <button
                                                className="button button-chico"
                                                onClick={() => {
                                                    borrarUnItem(
                                                        items.length - index - 1
                                                    );
                                                    console.log(
                                                        "borrado item: " + index
                                                    );
                                                    console.table(item);
                                                }}
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                </tbody>
            </table>
            <div className="container-reset">
                {/* <button type="button" onClick={forzarValores} >
                    Valores de prueba
                </button> */}
                <button className="button-vaciar" onClick={forzarValoresCero}>
                    X
                </button>
            </div>
        </div>
    );
};
