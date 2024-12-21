import Carrito from "@/components/Carrito";
import Image from "next/image";

export default async function Home() {
  const respuesta = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const data = await respuesta.json();
  
  return (
    <div>
      <Carrito productos={data} />
    </div>
  );
}
