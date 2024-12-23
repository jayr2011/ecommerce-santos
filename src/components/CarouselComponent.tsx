import { Carousel } from "flowbite-react";

export default function CarouselComponent(): JSX.Element {
  return (
    <div>
      <div className="h-60 bg-slate-300 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="" slideInterval={100000}>
          <img className="size-full object-contain" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR1UTU4N0MwSS9jYWJEbEpiZWpYQy9pRFJvTk1WL3dkOUtPUHdmeHpVRi90ejJNajZQak9EYzBUOWd3YWlIOHpLQlFVMEJ2bnk4TDV2UWtuV05TbzFPRQ" alt="..." />
          <img className="size-full object-contain" src="https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/65038654434d0-iPhone%2015%20Pro%20Natural%20titanium%20png.png" alt="..." />
        </Carousel>
    </div>
    </div>
  );
}