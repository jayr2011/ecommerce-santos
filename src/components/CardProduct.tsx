import { Card } from "flowbite-react";

export default function CardProduct(): JSX.Element {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Apple iPhone 14 Pro Max 128GB 5G"
      imgSrc="https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/65038654434d0-iPhone%2015%20Pro%20Natural%20titanium%20png.png"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple iPhone 14 Pro Max 128GB 5G
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
      </div>
      <div className="flex items-center">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">R$11.000</span>
        <a
          href="#"
          className="ml-2 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Adicionar ao Carrinho
        </a>
      </div>
    </Card>
  );
}