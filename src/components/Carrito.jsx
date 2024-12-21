"use client";
import Image from "next/image";
import React, { useState } from "react";

const Carrito = ({ productos }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id} onClick={()=>setCarrito([...carrito, producto ])}>
          <Image
            className="w-52"
            src={producto.image}
            width={2000}
            height={2000}
            alt=""
          />
          <h1>{producto.title}</h1>
        </div>
      ))}

      <div className="fixed right-0 top-0">
        Carrito:
        {
            carrito.map(
                (elemento)=>(
                    <div>
                        <p>{elemento.title}</p>
                    </div>
                )
            )
        }
      </div>
    </div>
  );
};

export default Carrito;
