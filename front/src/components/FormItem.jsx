import React from "react";

export const FormItem = ({ setData }) => {
    const setearDatos = (e) => {
        e.preventDefault();
        const form = e.target;
        const descriptionData = form.elements.description.value;
        const precioData = form.elements.precio.value;
        const cantidadData = form.elements.cantidad.value;

        if (descriptionData && precioData && cantidadData) {
            console.log("se cargo la descripcion: " + descriptionData);
            console.log("se cargo el precio: " + precioData);
            console.log("se cargo la cantidad: " + cantidadData);
            setData({
                descripcion: descriptionData,
                precio: precioData,
                cantidad: cantidadData,
            });
        } else {
            alert("Completar los campos");
        }
    };
    return (
        <div className="container-form">
            <form className="formData" onSubmit={setearDatos}>
                <input
                    className="input input-description"
                    type="text"
                    name="description"
                    placeholder="Descripción"
                    required
                ></input>
                <input
                    className="input input-precio"
                    type="number"
                    name="precio"
                    placeholder="$"
                    required
                ></input>
                <input
                    className="input input-cantidad"
                    type="number"
                    name="cantidad"
                    defaultValue={1}
                    placeholder="Cant"
                    required
                ></input>
                <button type="submit" className="button button-enviar">
                    {">"}
                </button>
            </form>
        </div>
    );
};
