import CardProduct from "../components/CardProduct";
import CarouselComponent from "../components/CarouselComponent";

export default function HomePage(): JSX.Element {
    return (
        <div>
            <div>
                <CarouselComponent />
            </div>
            <div className="mt-6">
                <CardProduct />
            </div>
        </div>
    );
}