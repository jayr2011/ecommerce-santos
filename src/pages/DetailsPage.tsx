import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../context/productsContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}