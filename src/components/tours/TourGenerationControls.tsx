const TourGenerationControls = () => {
  return (
    <div className="w-[400px] h-[180px] bg-white rounded-lg shadow-md p-6">
      <h3 className="font-semibold text-lg mb-4">Generate AI Tour</h3>
      <div className="space-y-4">
        <button className="w-full py-2 bg-blue-600 text-white rounded-md">
          Use Current Location
        </button>
        <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-md">
          Select Area on Map
        </button>
      </div>
    </div>
  );
};

export default TourGenerationControls;
