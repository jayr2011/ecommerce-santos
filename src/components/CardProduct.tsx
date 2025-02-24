import { Card, Spinner, Button, Tooltip } from "flowbite-react";
import { ProductTypes } from "../types/ProductsTypes";
import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import { SliderContext } from "../context/SliderContext";
import { Link } from "react-router-dom";

export default function Component() {
  const { products, loading, error } = useContext(ProductsContext);
  const { toggleOpen, toggleSlider } = useContext(SliderContext);

  if (loading) {
    return <Spinner className="size-12 text-cyan-700" />;
  }

  if (error) {
    return <p className="text-red-500">Algo deu errado</p>;
  }



  return (
    <div className="flex flex-col justify-start gap-5 sm:grid sm:grid-flow-row sm:grid-cols-4 sm:items-start sm:gap-4">
      {products.map((product: ProductTypes, key) => (
        <Card
        key={key}
        className="max-w-sm justify-between sm:h-[500px]"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={product.image}
      >
        <a href="#">
        <Link to={`/product/${product.id}`}>
            <h5 className="flex justify-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
        </Link>
        </a>
        <div className="flex flex-col items-center gap-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
            <Tooltip content="Adicione o item ao carrinho">
              <Button onClick={() => toggleSlider(!toggleOpen)}>Carrinho</Button>
            </Tooltip>
        </div>
      </Card>
      ))}
    </div>
  );
}