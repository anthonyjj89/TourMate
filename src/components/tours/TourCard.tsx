const TourCard = () => {
  return (
    <div className="w-[300px] h-[240px] bg-white rounded-lg shadow-md p-4">
      <div className="w-full h-32 bg-slate-200 rounded-md mb-3" />
      <h3 className="font-semibold text-lg mb-1">Sample Tour</h3>
      <p className="text-sm text-gray-600">30 min • 2.5 km</p>
    </div>
  );
};

export default TourCard;
