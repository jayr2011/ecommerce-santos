
import { Drawer } from "flowbite-react";
import { useContext } from "react";
import { SliderContext } from "../context/SliderContext";

export default function SliderCart() {
  const { toggleOpen, toggleSlider } = useContext(SliderContext);

  const handleClose = () => {
    toggleSlider(!toggleOpen);
  };

  return (
    <>
      <Drawer open={toggleOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Seu carrinho" />
        <Drawer.Items>
          <div className="">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Finalizar a compra
              <svg
                className="ms-2 size-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
