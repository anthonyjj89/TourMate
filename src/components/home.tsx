import MapView from "./map/MapView";
import TourCarousel from "./tours/TourCarousel";
import TourFilters from "./tours/TourFilters";
import TourGenerationControls from "./tours/TourGenerationControls";

function Home() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full h-[60%]">
        <MapView />
      </div>
      <div className="absolute top-4 right-4">
        <TourFilters />
      </div>
      <div className="absolute top-20 right-4">
        <TourGenerationControls />
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <TourCarousel />
      </div>
    </div>
  );
}

export default Home;
