import TourCard from "./TourCard";

const TourCarousel = () => {
  return (
    <div className="w-full h-[280px] bg-white p-4 overflow-x-auto">
      <div className="flex gap-4">
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </div>
  );
};

export default TourCarousel;
