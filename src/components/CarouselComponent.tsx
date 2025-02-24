import { Carousel } from "flowbite-react";
import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

export default function CarouselComponent(): JSX.Element {

  const { error, products } = useContext(ProductsContext);

  if (error) {
    return <p className="text-red-500">Algo deu errado</p>;
  }

  const CarouselImages = products.map((product) => product.image);

  return (
    <div>
      <div className="h-60 bg-slate-300 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="" slideInterval={100000}>
          <img className="size-full object-contain" src={CarouselImages[0]} alt="..." />
          <img className="size-full object-contain" src={CarouselImages[1]} alt="..." />
        </Carousel>
    </div>
    </div>
  );
}